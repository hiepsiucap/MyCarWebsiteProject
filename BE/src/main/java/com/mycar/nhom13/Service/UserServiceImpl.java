package com.mycar.nhom13.Service;

import com.mycar.nhom13.Dto.ChangePasswordDTO;
import com.mycar.nhom13.Dto.ChangeUserInfoDTO;
import com.mycar.nhom13.Dto.Pair;
import com.mycar.nhom13.Dto.RevenueDTO;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.ExceptionHandler.UnAuthenticated;
import com.mycar.nhom13.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements  UserService{

    private final UserRepository userRepository;

    private final CloudinaryService cloudinaryService;

    private final PasswordEncoder passwordEncoder;


    public UserServiceImpl(UserRepository userRepository,CloudinaryService cloudinaryService,PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.cloudinaryService = cloudinaryService;
        this.passwordEncoder=passwordEncoder;
    }
    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(int id) {
        User user = userRepository.findById(id);
        if(user == null)
            throw new ResourceNotFoundException("User id " + id +" not found");
        return user;
    }
    @Override
    public User findByEmail(String email){
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

        if(user == null) throw new ResourceNotFoundException("User id: "+ id +" not found");
        String imageName = "user_id_"+user.getUserId();
        String folder="users/user_license";
        String url = cloudinaryService.uploadImage(file,folder,imageName);
        user.setDriverLicense(url);

        user.setDriverLicenseCheck(null);
        return userRepository.save(user);
    }
    public User saveAvatar(MultipartFile file, int id) throws IOException {
        User user = this.findById(id);

        if(user == null) throw new ResourceNotFoundException("User id: "+ id +" not found");
        String imageName = "user_id_"+user.getUserId();
        String folder="users/user_avatar";
        String url = cloudinaryService.uploadImage(file,folder,imageName);
        user.setAvatar(url);
        return userRepository.save(user);
    }

    @Override
    public User checkLicense(int staffId, int id,boolean check) {

        User staff = this.findById(staffId);

        if(staff.getRole().equals("User")){
            throw new UnAuthenticated("No permission");
        }
        else{
            String checked=(check)?"Y":"N";
            User user = userRepository.findById(id);
            user.setDriverLicenseCheck(checked);
            return userRepository.save(user);
        }
    }

    @Override
    public boolean changePassword(ChangePasswordDTO changePasswordDto, int id) {

        User currentUser = this.findById(id);

        if (!passwordEncoder.matches(changePasswordDto.getCurrentPassword(), currentUser.getPassword())) {
            return false;
        }

        currentUser.setPassword(passwordEncoder.encode(changePasswordDto.getNewPassword()));
        userRepository.save(currentUser);

        return true;
    }

    @Override
    public RevenueDTO getRevenue(int id) {
        User user = this.findById(id);
        List<Car> cars = user.getCars();

        int [] monthRevenue = new int [12];
        int [] monthRent = new int[12];
        List<Pair> topRevenue= new ArrayList<>();
        for(Car car: cars){
            int profit=0;
            for (Rental rental : car.getRentals()){
                if(rental.getDropOffDate().getYear()==2024&&rental.getRentalStatus().equals("completed")){
                    profit += rental.getTotalCost();

                    monthRevenue[rental.getDropOffDate().getMonthValue()-1]+=rental.getTotalCost();
                    monthRent[rental.getDropOffDate().getMonthValue()-1]++;
                }
            }
            topRevenue.add(new Pair(car.getBrand() +" " + car.getModel() + " " + car.getYear()
                    ,profit));

        }
        Collections.sort(topRevenue, new Comparator<Pair>() {
            @Override
            public int compare(Pair p1, Pair p2) {
                return p2.getProfit().compareTo(p1.getProfit());
            }
        });
        topRevenue.removeIf(pair -> pair.getProfit() <= 0);
        List<String> topcar= new ArrayList<>();
        List<Integer> toprentcar= new ArrayList<>();
        int count=0;

        for(Pair p : topRevenue){
            if(count>=10) break;
            topcar.add(p.getName());
            toprentcar.add(p.getProfit());
            count++;
        }
        int totalRent=0;
        int totalRevenue=0;
        for(int i=0;i<12;i++){
            totalRent+=monthRent[i];
            totalRevenue+=monthRevenue[i];
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
    public List<Rental> getRentals(int id) {
        User user = this.findById(id);
        return user.getRentals();
    }

}
