package com.mycar.nhom13.Mapper;

import java.time.LocalDate;
import java.time.LocalTime;

import com.mycar.nhom13.Dto.RentalDTO;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.Rental;

public class RentalMapper {

	public static RentalDTO rentalToRentalDTO(Rental rental) {
		RentalDTO rentalDTO = new RentalDTO();
		rentalDTO.setCarId(rental.getCar().getCarId());
		rentalDTO.setPickUpDate(rental.getPickUpDate().toString());
		rentalDTO.setPickUpHours(rental.getPickUpHours().toString());
		rentalDTO.setDropOffDate(rental.getDropOffDate().toString());
		rentalDTO.setDropOffHours(rental.getDropOffHours().toString());
		rentalDTO.setTotalCost(rental.getTotalCost());
		return rentalDTO;
	}

	public static Rental rentalDTOToRental(RentalDTO rentalDTO, Car car) {
		Rental rental = new Rental();
		rental.setCar(car);
		rental.setPickUpDate(LocalDate.parse(rentalDTO.getPickUpDate()));
		rental.setPickUpHours(String.valueOf(LocalTime.parse(rentalDTO.getPickUpHours())));
		rental.setDropOffDate(LocalDate.parse(rentalDTO.getDropOffDate()));
		rental.setDropOffHours(String.valueOf(LocalTime.parse(rentalDTO.getDropOffHours())));
		rental.setTotalCost(rentalDTO.getTotalCost());
		return rental;
	}
}
