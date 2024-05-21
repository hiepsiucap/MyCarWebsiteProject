package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.Car;

import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Service.CarService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
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
	public ResponseEntity<Page<Car>> getActiveCars(@RequestParam(defaultValue = "0") int page) {
	    Pageable pageable = PageRequest.of(page, 10);
	    Page<Car> carsPage = carService.findByStatus("active", pageable);
	    return ResponseEntity.ok(carsPage);
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

	@GetMapping("/{id}")
	public ResponseEntity<Car> getCarById(@PathVariable int id) {
		Car car = carService.findByCarId(id);
		if(car == null) {
			throw new ResourceNotFoundException("Car id " + id +" not found");
		}
		return ResponseEntity.ok(car);
	}
	
	@GetMapping("/rental-status/{status}")
    public ResponseEntity<List<Car>> getCarsByRentalStatus(@PathVariable String status, HttpServletRequest request) {
        Integer userIdStr = (Integer) request.getAttribute("userId");
        if (String.valueOf(userIdStr) == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        List<Car> cars = carService.findCarsByRentalStatus(status, userIdStr);
        if (cars.isEmpty()) {
            throw new ResourceNotFoundException("No cars found with rental status: " + status);
        }
        return ResponseEntity.ok(cars);
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
											@PathVariable("id") int id) throws IOException {
		List<MultipartFile> files=new ArrayList<>();
		files.add(file1);
		files.add(file2);
		files.add(file3);
		files.add(file4);
		files.add(file5);
		Car savedCar = carService.saveImages(files,id);
		return new ResponseEntity<>(savedCar, new HttpHeaders(), HttpStatus.OK);


	}

}


