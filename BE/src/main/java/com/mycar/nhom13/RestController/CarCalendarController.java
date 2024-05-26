package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Dto.CarCalendarDTO;
import com.mycar.nhom13.Entity.CarCalendar;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Mapper.CarCalendarMapper;
import com.mycar.nhom13.Service.CarCalendarService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class CarCalendarController {

	@Autowired
	private CarCalendarService carCalendarService;
	private CarCalendarMapper calendarMapper;

	public CarCalendarController(CarCalendarService carCalendarService, CarCalendarMapper carCalendarMapper) {
		this.carCalendarService = carCalendarService;
		this.calendarMapper = carCalendarMapper;
	}

	@GetMapping
	public List<CarCalendar> getAllCarCalendars() {
		return carCalendarService.findAll();
	}

	@PostMapping("")
	public ResponseEntity<CarCalendarDTO> createCarCalendar(@RequestBody @Valid CarCalendarDTO carCalendarDTO) {

		CarCalendar carCalendar = calendarMapper.toEntity(carCalendarDTO);
		CarCalendar savedCarCalendar = carCalendarService.save(carCalendar, carCalendarDTO.getCarId());

		CarCalendarDTO savedCarCalendarDTO = calendarMapper.toDTO(savedCarCalendar);

		return ResponseEntity.status(HttpStatus.CREATED).body(savedCarCalendarDTO);
	}

	@PutMapping("/{id}")
	public ResponseEntity<CarCalendarDTO> updateCarCalendar(@PathVariable int id,
			@RequestBody @Valid CarCalendarDTO carCalendarDTO) {
		if (id != carCalendarDTO.getCalendarId()) {
			throw new ResourceNotFoundException("");
		}

		CarCalendar carCalendar = calendarMapper.toEntity(carCalendarDTO);
		carCalendar.setCalendarId(id);
		CarCalendar savedCarCalendar = carCalendarService.save(carCalendar, carCalendarDTO.getCarId());

		CarCalendarDTO savedCarCalendarDTO = calendarMapper.toDTO(savedCarCalendar);

		return ResponseEntity.ok(savedCarCalendarDTO);
	}

	@GetMapping("/car/{carId}")
	public List<CarCalendar> getCarCalendarsByCarId(@PathVariable Long carId) {
		return carCalendarService.findByCarId(carId);
	}
}
