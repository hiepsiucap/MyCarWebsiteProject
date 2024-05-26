package com.mycar.nhom13.Mapper;

import com.mycar.nhom13.Dto.PostCarDTO;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.Location;
import com.mycar.nhom13.Entity.User;

public class PostCarMapper {

	public static PostCarDTO carToCarDTO(Car car) {
		PostCarDTO c = new PostCarDTO();
		c.setCarId(car.getCarId());
		c.setLicensePlates(car.getLicensePlates());
		c.setModel(car.getModel());
		c.setBrand(car.getBrand());
		c.setYear(car.getYear());
		c.setColor(car.getColor());
		c.setType(car.getType());
		c.setSeat(car.getSeat());
		c.setGear(car.getGear());
		c.setFuel(car.getFuel());
		c.setConsumption(car.getConsumption());
		c.setDescription(car.getDescription());
		c.setCost(car.getCost());
		c.setDistrict(car.getLocation().getDistrict());
		c.setProvince(car.getLocation().getProvince());
		c.setAddress(car.getLocation().getAddress());

		return c;
	}

	public static Car dtoToCar(PostCarDTO dto, User user, Location location) {
		Car car = new Car();
		car.setCarId(dto.getCarId());
		car.setLicensePlates(dto.getLicensePlates());
		car.setModel(dto.getModel());
		car.setBrand(dto.getBrand());
		car.setYear(dto.getYear());
		car.setColor(dto.getColor());
		car.setType(dto.getType());
		car.setSeat(dto.getSeat());
		car.setGear(dto.getGear());
		car.setFuel(dto.getFuel());
		car.setConsumption(dto.getConsumption());
		car.setDescription(dto.getDescription());
		car.setCost(dto.getCost());
		car.setUser(user);
		car.setLocation(location);

		return car;
	}
}
