package com.mycar.nhom13.Mapper;

import java.util.stream.Collectors;

import com.mycar.nhom13.Dto.CarDTO;

import com.mycar.nhom13.Entity.Car;

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
                .map(rental -> ReviewMapper.reviewToReviewDTO(rental.getReview()))
                .collect(Collectors.toList()));
        CarDTO.setImages(car.getImages());
        return CarDTO;
    }
}
