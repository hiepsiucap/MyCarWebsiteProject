package com.mycar.nhom13.Service;

import com.mycar.nhom13.Dto.CarDTOGET;
import com.mycar.nhom13.Dto.RentalBrowse;
import com.mycar.nhom13.Dto.RentalDTO;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.RentalException;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.ExceptionHandler.UnAuthenticated;
import com.mycar.nhom13.Mapper.CarMapper;
import com.mycar.nhom13.Mapper.RentalMapper;

import com.mycar.nhom13.Repository.RentalRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import java.util.ArrayList;
import java.util.List;

@Service
public class RentalServiceImpl implements RentalService {

	private final RentalRepository rentalRepository;
	private final CarService carService;

	private final UserService userService;

	public RentalServiceImpl(RentalRepository repository, CarService carService, UserService userService) {
		this.rentalRepository = repository;
		this.carService = carService;
		this.userService = userService;
	}

	@Override
	public List<Rental> findAll() {
		return rentalRepository.findAll();

	}

	@Override
	public Rental findById(int id) {

		Rental rental = rentalRepository.findById(id);
		if (rental == null) {
			throw new ResourceNotFoundException("Rental id " + id + " not found");
		} else {
			return rental;
		}
	}

	@Override
	public Rental save(RentalDTO rentalDTO, int userId, int carId) throws Exception {

		Car car = carService.findByCarId(carId);

		User user = userService.findById(userId);

		Rental rental = RentalMapper.rentalDTOToRental(rentalDTO, car);

		if (!car.getStatus().equals("active")) {
			throw new RentalException("Không thể thuê xe này");
		}
		CarDTOGET carDTO = CarMapper.carToCarDTOGET(car);
		System.out.println(carDTO.getDays());
		for(LocalDate d : carDTO.getDays()){
			if(!d.isBefore(LocalDate.parse(rentalDTO.getPickUpDate())) && !d.isAfter(LocalDate.parse(rentalDTO.getDropOffDate()))){
				throw new RentalException("Đã có người thuê trong thời gian này");
			}

		}

		if (user.getDriverLicenseCheck() == null || user.getDriverLicenseCheck().equals("N")) {
			throw new RentalException("Chưa có bằng lái");
		}
		rental.setUser(user);
		rental.setDropOffLocation(car.getLocation());
		rental.setPickUpLocation(car.getLocation());

		if (rental.getDropOffDate().compareTo(rental.getPickUpDate()) < 0) {
			throw new RentalException("Ngày thuê và ngày trả không hợp lệ");
		}

		rental.setRentalStatus("pending");

		rental.setTotalDay((int) ChronoUnit.DAYS.between(rental.getPickUpDate(), rental.getDropOffDate()) + 1);

		if (rental.getTotalDay() * car.getCost() != rentalDTO.getTotalCost()) {
			throw new RentalException("Sai giá tiền");
		}

		rental.setTotalCost(rentalDTO.getTotalCost());

		return rentalRepository.save(rental);
	}

	@Override
	public Rental updateStatus(int rentalId, String status, int userId) {
		User user = userService.findById(userId);
		Rental rental = this.findById(rentalId);
		if(user.getUserId()==rental.getUser().getUserId()||!user.getRole().equals("User"))
		{
			String rentalStatus = rental.getRentalStatus();
		if (rentalStatus.equals("pending") && status.equals("completed"))
			throw new RentalException("Không hợp lệ");
		if (rentalStatus.equals("completed"))
			throw new RentalException("Không hợp lệ");
		if (rentalStatus.equals("confirmed") && status.equals("pending"))
			throw new RentalException("Không hợp lệ");
		if (rentalStatus.equals("cancelled"))
			throw new RentalException("Không hợp lệ");
		rental.setRentalStatus(status);
		return rentalRepository.save(rental);}
		else throw new RentalException("No permission");
	}

	@Override
	public String remove(int id, int userId) {
		User user = userService.findById(userId);
		Rental rental = this.findById(id);
		if(user.getUserId()!=rental.getUser().getUserId()){
			throw new RentalException("No permission");
		}
		rentalRepository.delete(rental);
		return new String("Deleted rental with Id: " + id);

	}

	@Override
	public List<RentalBrowse> getRentalToCheck(int id) {
		User user = userService.findById(id);

		if(user.getRole().equals("User")){
			throw new UnAuthenticated("No permission");
		}
		List<RentalBrowse> browseList = new ArrayList<>();
		List<Rental> list = this.findAll();
		for (Rental r : list){
			if(r.getRentalStatus().equals("pending")){
				RentalBrowse rentalBrowse = new RentalBrowse();
				rentalBrowse.setRental(r);
				rentalBrowse.setCarDTO(CarMapper.carToCarDTO(r.getCar()));
				browseList.add(rentalBrowse);
			}
		}
		return browseList;
	}

}
