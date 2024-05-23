package com.mycar.nhom13.Service;

import com.mycar.nhom13.Dto.RentalDTO;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.RentalException;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.ExceptionHandler.UnAuthenticated;
import com.mycar.nhom13.Repository.CarRepository;
import com.mycar.nhom13.Repository.RentalRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;

@Service
public class RentalServiceImpl implements  RentalService{

    private final RentalRepository rentalRepository;
    private final CarService carService;

    private final UserService userService;

    public RentalServiceImpl(RentalRepository repository,CarService carService,UserService userService)
    {
        this.rentalRepository =repository;
        this.carService=carService;
        this.userService=userService;
    }
    @Override
    public List<Rental> findAll() {
        return rentalRepository.findAll();
    }

    @Override
    public Rental findById(int id) {
        Rental rental=rentalRepository.findById(id);
        if(rental == null)
        {
            throw new ResourceNotFoundException("Rental id " + id +" not found");
        }
        else
        return rental;
    }

    @Override
    public Rental save(RentalDTO rentalDTO, int id) throws Exception {
        Rental rental = new Rental();
        Car car = carService.findByCarId(rentalDTO.getCar_Id());
        User user = userService.findById(id);
        if(user.getDriverLicenseCheck()==null||user.getDriverLicenseCheck().equals("N")){
            throw new RentalException("Chưa có bằng lái");
        }
        rental.setCar(car);
        rental.setUser(user);
        rental.setPickUpHours(rentalDTO.getPick_up_hours());
        rental.setDropOffHours(rentalDTO.getDrop_off_hours());
        rental.setDropOffLocation(car.getLocation());
        rental.setPickUpLocation(car.getLocation());
        rental.setPickUpDate(LocalDate.parse(rentalDTO.getPick_up_date()));
        rental.setDropOffDate(LocalDate.parse(rentalDTO.getDrop_off_date()));
        if(rental.getDropOffDate().compareTo(rental.getPickUpDate())<0){
            throw new RentalException("Ngày thuê và ngày trả không hợp lệ");
        }
        rental.setRentalStatus("pending");
        rental.setTotalDay((int)ChronoUnit.DAYS.between(rental.getPickUpDate(),rental.getDropOffDate())+1);
        if(rental.getTotalDay()*car.getCost()!=rentalDTO.getTotal_cost()){
            throw new RentalException("Sai giá tiền");
        }
        rental.setTotalCost(rentalDTO.getTotal_cost());
        System.out.println(rental);
        return rentalRepository.save(rental);
    }

    @Override
    public Rental updateStatus(int rentalId, String status, int userId)  {
        User user = userService.findById(userId);
        if(user.getRole().equals("User")){
            throw new UnAuthenticated("No permission");
        }
        Rental rental = this.findById(rentalId);
        String rentalStatus=rental.getRentalStatus();
        if(rentalStatus.equals("pending")&&status.equals("completed")) throw new RentalException("Không hợp lệ");
        if(rentalStatus.equals("completed")) throw new RentalException("Không hợp lệ");
        if(rentalStatus.equals("confirmed")&&status.equals("pending")) throw new RentalException("Không hợp lệ");
        if(rentalStatus.equals("cancelled")) throw new RentalException("Không hợp lệ");
        rental.setRentalStatus(status);
        return rentalRepository.save(rental);
    }

    @Override
    public String remove(int id)  {
        Rental rental = this.findById(id);
        rentalRepository.delete(rental);
        return new String("Deleted rental with Id: "+id);

    }


}
