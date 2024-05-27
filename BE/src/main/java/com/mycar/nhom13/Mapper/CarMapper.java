package com.mycar.nhom13.Mapper;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.mycar.nhom13.Dto.CarDTO;

import com.mycar.nhom13.Dto.CarDTOGET;
import com.mycar.nhom13.Entity.Car;
import org.springframework.cglib.core.Local;

public class CarMapper {

	public static CarDTO carToCarDTO(Car car) {
		CarDTO CarDTO = new CarDTO();
		CarDTO.setName(car.getBrand() + " " + car.getModel() + " " + car.getYear());
		CarDTO.setSeat(car.getSeat());
		CarDTO.setGear(car.getGear());
		CarDTO.setFuel(car.getFuel());
		CarDTO.setConsumption(car.getConsumption());
		CarDTO.setDescription(car.getDescription());
		CarDTO.setCost(car.getCost());
		CarDTO.setDistrict(car.getLocation().getDistrict());
		CarDTO.setProvince(car.getLocation().getProvince());
		CarDTO.setAddress(car.getLocation().getAddress());

		CarDTO.setDays(car.getCarCalendars());
		CarDTO.setReviews(car.getRentals().stream()
				.map(rental -> rental.getReview() != null ? ReviewMapper.reviewToReviewDTO(rental.getReview()) : null)
				.filter(Objects::nonNull).collect(Collectors.toList()));

		CarDTO.setImages(car.getImages());
		return CarDTO;
	}

	public static CarDTOGET carToCarDTOGET(Car car) {
		CarDTOGET carDTOGET = new CarDTOGET();
		carDTOGET.setName(car.getBrand() + " " + car.getModel() + " " + car.getYear());
		carDTOGET.setSeat(car.getSeat());
		carDTOGET.setGear(car.getGear());
		carDTOGET.setFuel(car.getFuel());
		carDTOGET.setConsumption(car.getConsumption());
		carDTOGET.setDescription(car.getDescription());
		carDTOGET.setCost(car.getCost());
		carDTOGET.setDistrict(car.getLocation().getDistrict());
		carDTOGET.setProvince(car.getLocation().getProvince());
		carDTOGET.setAddress(car.getLocation().getAddress());
		List<LocalDate> days = car.getCarCalendars().stream()
				.flatMap(calendar -> {
					List<LocalDate> dates = new ArrayList<>();
					LocalDate currentDate = LocalDate.parse(calendar.getStartDate().toString());
					LocalDate endDate = LocalDate.parse(calendar.getEndDate().toString());
					while (!currentDate.isAfter(endDate)) {
						dates.add(currentDate);
						currentDate = currentDate.plusDays(1);
					}
					return dates.stream();
				})
				.distinct()
				.collect(Collectors.toList());
		List<LocalDate> rentalDays = car.getRentals().stream()
				.flatMap(rental -> {
					List<LocalDate> dates = new ArrayList<>();
					LocalDate currentDate = rental.getPickUpDate();
					LocalDate endDate = rental.getDropOffDate();
					while (!currentDate.isAfter(endDate)) {
						dates.add(currentDate);
						currentDate = currentDate.plusDays(1);
					}
					return dates.stream();
				})
				.distinct()
				.collect(Collectors.toList());
		days.addAll(rentalDays);

		Collections.sort(days);

		carDTOGET.setDays(days);
		carDTOGET.setReviews(car.getRentals().stream()
				.map(rental -> rental.getReview() != null ? ReviewMapper.reviewToReviewDTO(rental.getReview()) : null)
				.filter(Objects::nonNull).collect(Collectors.toList()));

		carDTOGET.setImages(car.getImages());
		return carDTOGET;
	}
}
