package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.CarCalendar;
import java.util.List;

public interface CarCalendarService {
	List<CarCalendar> findAll();

	CarCalendar save(CarCalendar carCalendar, int carId);

	List<CarCalendar> findByCarId(Long carId);
}
