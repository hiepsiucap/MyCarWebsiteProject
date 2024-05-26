package com.mycar.nhom13.Mapper;

import org.springframework.stereotype.Component;

import com.mycar.nhom13.Dto.CarCalendarDTO;
import com.mycar.nhom13.Entity.CarCalendar;

@Component
public class CarCalendarMapper {

	public CarCalendarDTO toDTO(CarCalendar carCalendar) {
		CarCalendarDTO carCalendarDTO = new CarCalendarDTO();
		carCalendarDTO.setCalendarId(carCalendar.getCalendarId());
		carCalendarDTO.setStartDate(carCalendar.getStartDate());
		carCalendarDTO.setEndDate(carCalendar.getEndDate());
		if (carCalendar.getCar() != null) {
			carCalendarDTO.setCarId(carCalendar.getCar().getCarId());
		}
		return carCalendarDTO;
	}

	public CarCalendar toEntity(CarCalendarDTO carCalendarDTO) {
		CarCalendar carCalendar = new CarCalendar();
		carCalendar.setCalendarId(carCalendarDTO.getCalendarId());
		carCalendar.setStartDate(carCalendarDTO.getStartDate());
		carCalendar.setEndDate(carCalendarDTO.getEndDate());
		return carCalendar;
	}

}
