package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Repository.CarRepository;
import com.mycar.nhom13.Service.CarService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*") 
@RequestMapping("/api")
public class CarMgmtController {
	@Autowired
	private CarRepository carRepository;
	private CarService carService;

	public CarMgmtController(CarService carService) {
		this.carService = carService;
	}

	@GetMapping({"/cars", "/cars/"})
	public List<Car> getActiveCars() {
		return carRepository.findByStatus("active");
	}

	@GetMapping("/cars/{id}")
	public ResponseEntity<Car> getCarById(@PathVariable Long id) {
		Car car = carService.findByCarId(id);
		if(car == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(car);
	}
	
	@PostMapping("/cars")
	public ResponseEntity<Car> postCar(@RequestBody Car car){
	    Car savedCar = carService.save(car);
	    return ResponseEntity.created(URI.create("/cars/" + savedCar.getCarId())).body(savedCar);
	}
	
	@PatchMapping("/cars/{id}")
	public ResponseEntity<Car> patchCar(@PathVariable long id, @RequestBody Map<String, Object> fields) {
	    Car updatedCar = carService.update(id, fields);
	    if(updatedCar == null) {
	    	System.out.print("Khong tim thay xe nay!");
	    }
	    return new ResponseEntity<>(updatedCar, new HttpHeaders(), HttpStatus.OK);
	}
}


