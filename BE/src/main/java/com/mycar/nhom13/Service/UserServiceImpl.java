package com.mycar.nhom13.Service;

import com.mycar.nhom13.Dto.*;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.Location;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ChangePasswordException;
import com.mycar.nhom13.ExceptionHandler.RentalException;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.ExceptionHandler.UnAuthenticated;
import com.mycar.nhom13.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;

	private final CloudinaryService cloudinaryService;

	private final PasswordEncoder passwordEncoder;

	private final CarService carService;

	public UserServiceImpl(UserRepository userRepository, CloudinaryService cloudinaryService,
			PasswordEncoder passwordEncoder, CarService carService) {
		this.userRepository = userRepository;
		this.cloudinaryService = cloudinaryService;
		this.passwordEncoder = passwordEncoder;
		this.carService=carService;
	}

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User findById(int id) {
		User user = userRepository.findById(id);
		if (user == null)
			throw new ResourceNotFoundException("User id " + id + " not found");
		return user;
	}

	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

	@Override
	public User update(int id, ChangeUserInfoDTO changeUserInfoDTO) {

		User user = this.findById(id);

		user.setLastName(changeUserInfoDTO.getLastName());
		user.setFirstName(changeUserInfoDTO.getFirstName());
		user.setPhoneNumber(changeUserInfoDTO.getPhoneNumber());

		return userRepository.save(user);

	}

	public User saveLicense(MultipartFile file, int id) throws IOException {

		User user = this.findById(id);

		if (user == null)
			throw new ResourceNotFoundException("User id: " + id + " not found");
		String imageName = "user_id_" + user.getUserId();
		String folder = "users/user_license";
		String url = cloudinaryService.uploadImage(file, folder, imageName);
		user.setDriverLicense(url);

		user.setDriverLicenseCheck(null);
		return userRepository.save(user);
	}

	public User saveAvatar(MultipartFile file, int id) throws IOException {
		User user = this.findById(id);

		if (user == null)
			throw new ResourceNotFoundException("User id: " + id + " not found");
		String imageName = "user_id_" + user.getUserId();
		String folder = "users/user_avatar";
		String url = cloudinaryService.uploadImage(file, folder, imageName);
		user.setAvatar(url);
		return userRepository.save(user);
	}

	@Override
	public User checkLicense(int staffId, int id, boolean check) {

		User staff = this.findById(staffId);

		if (staff.getRole().equals("User")) {
			throw new UnAuthenticated("No permission");
		} else {

			String checked = (check) ? "Y" : "N";
			User user = userRepository.findById(id);
			if(user.getDriverLicenseCheck()!=null)
				throw new RuntimeException("Bằng lái này đã được xử lí");
			user.setDriverLicenseCheck(checked);
			return userRepository.save(user);
		}
	}

	@Override
	public boolean changePassword(ChangePasswordDTO changePasswordDto, int id) {

		User currentUser = this.findById(id);

		if (!passwordEncoder.matches(changePasswordDto.getCurrentPassword(), currentUser.getPassword())) {
			throw new ChangePasswordException("Sai mật khẩu");
		}

		currentUser.setPassword(passwordEncoder.encode(changePasswordDto.getNewPassword()));
		userRepository.save(currentUser);

		return true;
	}

	@Override
	public RevenueDTO getRevenue(int id) {
		User user = this.findById(id);
		List<Car> cars = user.getCars();

		int[] monthRevenue = new int[12];
		int[] monthRent = new int[12];
		List<Pair> topRevenue = new ArrayList<>();
		for (Car car : cars) {
			int profit = 0;
			for (Rental rental : car.getRentals()) {
				if (rental.getDropOffDate().getYear() == 2024 && rental.getRentalStatus().equals("completed")) {
					profit += rental.getTotalCost();

					monthRevenue[rental.getDropOffDate().getMonthValue() - 1] += rental.getTotalCost();
					monthRent[rental.getDropOffDate().getMonthValue() - 1]++;
				}
			}
			topRevenue.add(new Pair(car.getBrand() + " " + car.getModel() + " " + car.getYear(), profit));

		}
		Collections.sort(topRevenue, new Comparator<Pair>() {
			@Override
			public int compare(Pair p1, Pair p2) {
				return p2.getProfit().compareTo(p1.getProfit());
			}
		});
		topRevenue.removeIf(pair -> pair.getProfit() <= 0);
		List<String> topcar = new ArrayList<>();
		List<Integer> toprentcar = new ArrayList<>();
		int count = 0;

		for (Pair p : topRevenue) {
			if (count >= 10)
				break;
			topcar.add(p.getName());
			toprentcar.add(p.getProfit());
			count++;
		}
		int totalRent = 0;
		int totalRevenue = 0;
		for (int i = 0; i < 12; i++) {
			totalRent += monthRent[i];
			totalRevenue += monthRevenue[i];
		}

		RevenueDTO revenueDTO = new RevenueDTO();

		revenueDTO.setTotalCar(cars.size());
		revenueDTO.setTotalRent(totalRent);
		revenueDTO.setTotalRevenue(totalRevenue);
		revenueDTO.setMonthRevenue(Arrays.stream(monthRevenue).boxed().collect(Collectors.toList()));
		revenueDTO.setMonthRent(Arrays.stream(monthRent).boxed().collect(Collectors.toList()));
		revenueDTO.setTopCar(topcar);
		revenueDTO.setTopRentCar(toprentcar);

		return revenueDTO;
	}

	@Override
	public List<UserRentalsDTO> getRentals(int id) {
		List<UserRentalsDTO> list = new ArrayList<>();
		User user = this.findById(id);
		int count=0;
		for(Rental r : user.getRentals()){
			if(!r.getRentalStatus().equals("confirmed")) continue;
			Car car = r.getCar();
			UserRentalsDTO userRentalsDTO = new UserRentalsDTO();
			userRentalsDTO.setRentalId(r.getRentalId());
			userRentalsDTO.setCarId(car.getCarId());
			userRentalsDTO.setName(car.getBrand() + " " + car.getModel() + " " + car.getYear());
			userRentalsDTO.setDropOffDate(r.getDropOffHours() + " " + r.getDropOffDate());
			userRentalsDTO.setStatus(r.getRentalStatus());
			userRentalsDTO.setRentCount((int)car.getRentals().stream()
					.filter(rental -> !"cancelled".equalsIgnoreCase(rental.getRentalStatus()))
					.count());
			userRentalsDTO.setGear(car.getGear());
			userRentalsDTO.setThumbnail(car.getImage());
			userRentalsDTO.setReview(car.getReview());

			Location location=r.getDropOffLocation();
			userRentalsDTO.setLocation(location.getDistrict() + ", " +location.getProvince());
			LocalDate endDate = r.getDropOffDate();
			String time = r.getDropOffHours();

			String[] parts = time.split(":");


			LocalDateTime now = LocalDateTime.now();
			LocalDateTime end = LocalDateTime.of(endDate.getYear(),endDate.getMonthValue(),endDate.getDayOfMonth(),Integer.parseInt(parts[0]),Integer.parseInt(parts[1]));

			userRentalsDTO.setHoursLeft((int)Duration.between(now,end).toHours());
			list.add(userRentalsDTO);
		}
		return list;
	}

	@Override
	public Integer getNumOfRental(int id) {
		User user = this.findById(id);
		if (user.getRentals() == null) {
			return 0;
		} else {
			return user.getRentals().size();
		}
	}

	@Override
	public List<User> getListNeedCheck(int id) {
		User user = this.findById(id);
		if (user.getRole().equals("User")) {
			throw new UnAuthenticated("No permission");
		}

		List<User> userList = userRepository.findAll();
		return userList.stream()
				.filter(user1 -> user1.getDriverLicense() != null && user1.getDriverLicenseCheck() == null)
				.collect(Collectors.toList());

	}

    @Override
    public List<UserRentalsDTO> getAllRentals(int id) {
		List<UserRentalsDTO> list = new ArrayList<>();
		User user = this.findById(id);
		int count=0;
		for(Rental r : user.getRentals()){

			Car car = r.getCar();
			UserRentalsDTO userRentalsDTO = new UserRentalsDTO();
			userRentalsDTO.setRentalId(r.getRentalId());
			userRentalsDTO.setCarId(car.getCarId());
			userRentalsDTO.setName(car.getBrand() + " " + car.getModel() + " " + car.getYear());
			userRentalsDTO.setDropOffDate(r.getDropOffHours() + " " + r.getDropOffDate());
			userRentalsDTO.setStatus(r.getRentalStatus());
			userRentalsDTO.setRentCount((int)car.getRentals().stream()
					.filter(rental -> !"cancelled".equalsIgnoreCase(rental.getRentalStatus()))
					.count());
			userRentalsDTO.setGear(car.getGear());
			userRentalsDTO.setThumbnail(car.getImage());
			userRentalsDTO.setReview(car.getReview());

			Location location=r.getDropOffLocation();
			userRentalsDTO.setLocation(location.getDistrict() + ", " +location.getProvince());
			LocalDate endDate = r.getDropOffDate();
			String time = r.getDropOffHours();

			String[] parts = time.split(":");


			LocalDateTime now = LocalDateTime.now();
			LocalDateTime end = LocalDateTime.of(endDate.getYear(),endDate.getMonthValue(),endDate.getDayOfMonth(),Integer.parseInt(parts[0]),Integer.parseInt(parts[1]));

			userRentalsDTO.setHoursLeft(((int)Duration.between(now,end).toHours()));
			list.add(userRentalsDTO);
		}
		Collections.sort(list, statusComparator);
		return list;
	}

	@Override
	public List<RentalHistory> getRentalsHistory(int id) {
		User user = this.findById(id);
		List<Car> cars = user.getCars();
		List<RentalHistory> list = new ArrayList<>();
		for(Car c : cars){
			List<Rental> rentals =c.getRentals();
			for(Rental r : rentals){
				RentalHistory rentalHistory = new RentalHistory();
				rentalHistory.setCarId(c.getCarId());
				rentalHistory.setName(c.getBrand() + " " + c.getModel() + " " + c.getYear());
				rentalHistory.setRentalStatus(r.getRentalStatus());
				rentalHistory.setTotalCost(r.getTotalCost());
				rentalHistory.setTotalDay(r.getTotalDay());
				rentalHistory.setRentalDate(r.getPickUpDate().toString() +" - " + r.getDropOffDate());
				list.add(rentalHistory);
			}
		}
		Collections.sort(list, carIDComparator);
		return list;
	}

    @Override
    public List<RentalHistory> getCarHistory(int id, int userId) {
		Car car = carService.findByCarId(id);
		if(car.getUser().getUserId()!=userId){
			throw new RentalException("Không phải xe của bạn");
		}
		List<RentalHistory> list = new ArrayList<>();
			List<Rental> rentals =car.getRentals();
			for(Rental r : car.getRentals()){
				RentalHistory rentalHistory = new RentalHistory();
				rentalHistory.setCarId(car.getCarId());
				rentalHistory.setName(car.getBrand() + " " + car.getModel() + " " + car.getYear());
				rentalHistory.setRentalStatus(r.getRentalStatus());
				rentalHistory.setTotalCost(r.getTotalCost());
				rentalHistory.setTotalDay(r.getTotalDay());
				rentalHistory.setRentalDate(r.getPickUpDate().toString() +" - " + r.getDropOffDate());
				list.add(rentalHistory);
			}
			Collections.sort(list,comparator);

			return list;

	}

    Comparator<RentalHistory> carIDComparator = new Comparator<RentalHistory>() {
		@Override
		public int compare(RentalHistory o1, RentalHistory o2) {
			return Integer.compare(o1.getCarId(), o2.getCarId());
		}
	};


	Comparator<UserRentalsDTO> statusComparator = new Comparator<UserRentalsDTO>() {
		@Override
		public int compare(UserRentalsDTO o1, UserRentalsDTO o2) {
			return getStatusOrder(o1.getStatus()) - getStatusOrder(o2.getStatus());
		}

		private int getStatusOrder(String status) {
			switch (status) {
				case "pending":
					return 1;
				case "confirmed":
					return 2;
				case "completed":
					return 3;
				case "cancelled":
					return 4;
				default:
					return 5;
			}
		}
	};

	Comparator<RentalHistory> comparator = new Comparator<RentalHistory>() {
		@Override
		public int compare(RentalHistory r1, RentalHistory r2) {
			return getStatusOrder(r1.getRentalStatus()) - getStatusOrder(r2.getRentalStatus());
		}

		private int getStatusOrder(String status) {
			switch (status) {
				case "pending":
					return 1;
				case "confirmed":
					return 2;
				case "completed":
					return 3;
				case "cancelled":
					return 4;
				default:
					return 5;
			}
		}
	};


}
