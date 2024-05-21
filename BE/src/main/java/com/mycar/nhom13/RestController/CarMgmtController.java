package com.mycar.nhom13.RestController;

import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Service.CarService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*") 
@RequestMapping("/api/cars")

public class CarMgmtController {
	
	@Autowired
	private CarService carService;

	public CarMgmtController(CarService carService) {
		this.carService = carService;
	}

	@GetMapping("")
    public ResponseEntity<MappingJacksonValue> getActiveCars(@RequestParam(defaultValue = "0") int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Car> carsPage = carService.findByStatus("active", pageable);

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAllExcept("carCalendars", "image", "user");
        SimpleFilterProvider filters = new SimpleFilterProvider().addFilter("CarListFilter", filter);

        MappingJacksonValue mapping = new MappingJacksonValue(carsPage);
        mapping.setFilters(filters);

        return ResponseEntity.ok(mapping);
    }

	@GetMapping("/{id}")
	public ResponseEntity<MappingJacksonValue> getCarById(@PathVariable long id) {
	    Car car = carService.findByCarId(id);
	    if (car == null) {
	        throw new ResourceNotFoundException("Car id " + id + " not found");
	    }
	    
	    MappingJacksonValue mapping = new MappingJacksonValue(car);
	    mapping.setFilters(new SimpleFilterProvider().setFailOnUnknownId(false));
	    
	    return ResponseEntity.ok(mapping);
	}

	
    @GetMapping("/conditions")
    public List<Car> getCars(
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) List<String> type,
            @RequestParam(required = false) Integer minprice,
            @RequestParam(required = false) Integer maxprice,
            @RequestParam(required = false) List<String> fuel,
            @RequestParam(required = false) String province) {
        return carService.filterCars(brand, type, minprice, maxprice, fuel, province);
    }

    @GetMapping("/rental-status/{status}")
    public ResponseEntity<MappingJacksonValue> getCarsByRentalStatus(@PathVariable String status, HttpServletRequest request) {
        int userId = getUserIdFromCookie(request);
        if (String.valueOf(userId) == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        List<Car> cars = carService.findCarsByRentalStatus(status, userId);
        if (cars.isEmpty()) {
            throw new ResourceNotFoundException("No cars found with rental status: " + status);
        }

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAllExcept("carCalendars", "image", "user");
        SimpleFilterProvider filters = new SimpleFilterProvider().addFilter("CarListFilter", filter);

        MappingJacksonValue mapping = new MappingJacksonValue(cars);
        mapping.setFilters(filters);

        return ResponseEntity.ok(mapping);
    }

    private int getUserIdFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("auth_by_cookie")) {
                    String cookieValue = cookie.getValue();
                    String[] parts = cookieValue.split("&");
                    return Integer.parseInt(parts[0]);
                }
            }
        }
        return 0;
    }
	
	@PostMapping("")
	public ResponseEntity<Car> postCar(@RequestBody Car car){
	    Car savedCar = carService.save(car);
	    return ResponseEntity.created(URI.create("/cars/" + savedCar.getCarId())).body(savedCar);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Car> patchCar(@PathVariable int id, @RequestBody Map<String, Object> fields) {
	    Car updatedCar = carService.update(id, fields);
	    if(updatedCar == null) {
			throw new ResourceNotFoundException("Car id " + id +" not found");
	    }
	    return new ResponseEntity<>(updatedCar, new HttpHeaders(), HttpStatus.OK);
	}
	
	
	
}


