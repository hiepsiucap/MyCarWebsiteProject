package com.mycar.nhom13.RestController;

import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.mycar.nhom13.Dto.CarDTO;
import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Mapper.CarMapper;
import com.mycar.nhom13.Service.CarService;
import com.mycar.nhom13.Service.UserService;


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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cars")

public class CarMgmtController {
	
	@Autowired
	private CarService carService;
	
	@Autowired
	private UserService userService;


	public CarMgmtController(CarService carService) {
		this.carService = carService;
	}

	@GetMapping("")
    public ResponseEntity<MappingJacksonValue> getActiveCars(@RequestParam(defaultValue = "0") int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Car> carsPage = carService.findByStatus("active", pageable);
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAllExcept("carCalendars", "image","images" ,  "user", "rentals");
        SimpleFilterProvider filters = new SimpleFilterProvider().addFilter("CarListFilter", filter);

        MappingJacksonValue mapping = new MappingJacksonValue(carsPage);
        mapping.setFilters(filters);

        return ResponseEntity.ok(mapping);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarDTO> getCarById(@PathVariable int id) {
        Car car = carService.findByCarId(id);
        if (car == null) {
            throw new ResourceNotFoundException("Car id " + id + " not found");
        }
        CarDTO carDTO = CarMapper.carToCarDTO(car);
        return ResponseEntity.ok(carDTO);
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
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAllExcept("carCalendars", "image","images" ,  "user", "rentals");
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
    public ResponseEntity<Car> postCar(@RequestBody Car car, HttpServletRequest request) {
        int userId = getUserIdFromCookie(request);
        User user = userService.findById(userId); 
        car.setUser(user); 
        Car savedCar = carService.save(car);
        return ResponseEntity.created(URI.create("/api/cars/" + savedCar.getCarId())).body(savedCar);
    }

	
	@PatchMapping("/{id}")
	public ResponseEntity<Car> patchCar(@PathVariable int id, @RequestBody Map<String, Object> fields) {
	    Car updatedCar = carService.update(id, fields);
	    if(updatedCar == null) {
			throw new ResourceNotFoundException("Car id " + id +" not found");
	    }
	    return new ResponseEntity<>(updatedCar, new HttpHeaders(), HttpStatus.OK);
	}

    @PostMapping("/{id}/thumbnail")
    public ResponseEntity<Car> uploadThumbnail(@RequestParam("image") MultipartFile file,
                                               @PathVariable("id") int id) throws IOException {

        Car savedCar = carService.saveThumbnail(file,id);
        return new ResponseEntity<>(savedCar, new HttpHeaders(), HttpStatus.OK);


    }


    @PostMapping("/{id}/images")
    public ResponseEntity<Car> uploadImages(@RequestParam("image1") MultipartFile file1,
                                            @RequestParam("image2") MultipartFile file2,
                                            @RequestParam("image3") MultipartFile file3,
                                            @RequestParam("image4") MultipartFile file4,
                                            @RequestParam("image5") MultipartFile file5,
                                            @RequestParam("image6") MultipartFile file6,
                                            @PathVariable("id") int id) throws IOException {
        carService.saveThumbnail(file1,id);
        List<MultipartFile> files=new ArrayList<>();

        files.add(file2);
        files.add(file3);
        files.add(file4);
        files.add(file5);
        files.add(file6);

        Car savedCar = carService.saveImages(files,id);
        return new ResponseEntity<>(savedCar, new HttpHeaders(), HttpStatus.OK);


    }
	
	
	
}


