package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.CarCalendar;
import com.mycar.nhom13.Repository.CarCalendarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarCalendarServiceImpl implements CarCalendarService {

	@Autowired
	private CarCalendarRepository carCalendarRepository;
	@Autowired
	private CarService carserivce;

	@Override
	public List<CarCalendar> findAll() {
		return carCalendarRepository.findAll();
	}

	@Override
	public CarCalendar save(CarCalendar carCalendar, int carId) {

		Car car = carserivce.findByCarId(carId);

		carCalendar.setCar(car);
		return carCalendarRepository.save(carCalendar);
	}

	@Override
	public List<CarCalendar> findByCarId(Long carId) {
		return carCalendarRepository.findAll().stream().filter(carCalendar -> carCalendar.getCar().getCarId() == carId)
				.toList();
	}
}
