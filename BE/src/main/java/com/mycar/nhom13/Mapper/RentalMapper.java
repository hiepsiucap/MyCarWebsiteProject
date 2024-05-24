package com.mycar.nhom13.Mapper;

import java.time.LocalDate;
import java.time.LocalTime;

import com.mycar.nhom13.Dto.RentalDTO;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.Rental;

public class RentalMapper {
    
    public static RentalDTO rentalToRentalDTO(Rental rental) {
        RentalDTO rentalDTO = new RentalDTO();
        rentalDTO.setCar_Id(rental.getCar().getCarId());
        rentalDTO.setPick_up_date(rental.getPickUpDate().toString());
        rentalDTO.setPick_up_hours(rental.getPickUpHours().toString());
        rentalDTO.setDrop_off_date(rental.getDropOffDate().toString());
        rentalDTO.setDrop_off_hours(rental.getDropOffHours().toString());
        rentalDTO.setTotal_cost(rental.getTotalCost());
        return rentalDTO;
    }
    
    public static Rental rentalDTOToRental(RentalDTO rentalDTO, Car car) {
        Rental rental = new Rental();
        rental.setCar(car);
        rental.setPickUpDate(LocalDate.parse(rentalDTO.getPick_up_date()));
        rental.setPickUpHours(String.valueOf(LocalTime.parse(rentalDTO.getPick_up_hours())));
        rental.setDropOffDate(LocalDate.parse(rentalDTO.getDrop_off_date()));
        rental.setDropOffHours(String.valueOf(LocalTime.parse(rentalDTO.getDrop_off_hours())));
        rental.setTotalCost(rentalDTO.getTotal_cost());
        return rental;
    }
}
