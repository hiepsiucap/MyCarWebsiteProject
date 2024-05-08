package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Repository.CarRepository;
import com.mycar.nhom13.Service.CarService;
import com.mycar.nhom13.Service.SortCarService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")  
public class CarMgmtController {
	@Autowired
	private CarRepository carRepository;
	private CarService carService;
	private SortCarService SortCarService;

	public CarMgmtController(CarService carService, SortCarService sortCarService) {
		this.carService = carService;
		this.SortCarService = sortCarService;
	}

	@GetMapping({"/cars", "/cars/"})
	public List<Car> getActiveCars() {
		return carRepository.findByTrangThai("active");
	}

	@GetMapping("/cars/{id}")
	public ResponseEntity<Car> getCarById(@PathVariable Long id) {
		Car car = carService.findById(id);
		if(car == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(car);
	}
	
	@PostMapping("/cars")
	public ResponseEntity<Car> postCar(@RequestBody Car car){
	    Car savedCar = carService.save(car);
	    return ResponseEntity.created(URI.create("/cars/" + savedCar.getMaXe())).body(savedCar);
	}
	
	@PatchMapping("/cars/{id}")
	public ResponseEntity<Car> patchCar(@PathVariable Long id, @RequestBody Car carUpdates) {
	    Car existingCar = carService.findById(id);
	    if (existingCar == null) {
	        return ResponseEntity.notFound().build();
	    }
	    if (carUpdates.getThongTinXe() != null) {
	        existingCar.setThongTinXe(carUpdates.getThongTinXe());
	    }
	    if (carUpdates.getChoNgoi() != null) {
	        existingCar.setChoNgoi(carUpdates.getChoNgoi());
	    }
	    if (carUpdates.getNhienLieuThu() != null) {
	        existingCar.setNhienLieuThu(carUpdates.getNhienLieuThu());
	    }
	    if (carUpdates.getLoaiNhienLieu() != null) {
	        existingCar.setLoaiNhienLieu(carUpdates.getLoaiNhienLieu());
	    }
	    if (carUpdates.getHopSo() != null) {
	        existingCar.setHopSo(carUpdates.getHopSo());
	    }
	    if (carUpdates.getGia() != null) {
	        existingCar.setGia(carUpdates.getGia());
	    }
	    if (carUpdates.getMoTa() != null) {
	        existingCar.setMoTa(carUpdates.getMoTa());
	    }
	    if (carUpdates.getDanhGia() != null) {
	        existingCar.setDanhGia(carUpdates.getDanhGia());
	    }
	    if (carUpdates.getViTri() != null) {
	        existingCar.setViTri(carUpdates.getViTri());
	    }
	    if (carUpdates.getAnh() != null) {
	        existingCar.setAnh(carUpdates.getAnh());
	    }
	    if (carUpdates.getTrangThai() != null) {
	        existingCar.setTrangThai(carUpdates.getTrangThai());
	    }
	    if (carUpdates.getLuotChoThue() != null) {
	        existingCar.setLuotChoThue(carUpdates.getLuotChoThue());
	    }
	    if (carUpdates.getLuotDanhGia() != null) {
	        existingCar.setLuotDanhGia(carUpdates.getLuotDanhGia());
	    }
	    if (carUpdates.getDanhGiaTrungBinh() != null) {
	        existingCar.setDanhGiaTrungBinh(carUpdates.getDanhGiaTrungBinh());
	    }
	    if (carUpdates.getGiayToXe() != null) {
	        existingCar.setGiayToXe(carUpdates.getGiayToXe());
	    }
	    if (carUpdates.getGiaChoThue() != null) {
	        existingCar.setGiaChoThue(carUpdates.getGiaChoThue());
	    }
	    if (carUpdates.getThongTinLienQuan() != null) {
	        existingCar.setThongTinLienQuan(carUpdates.getThongTinLienQuan());
	    }
	    if (carUpdates.getDieuKhoan() != null) {
	        existingCar.setDieuKhoan(carUpdates.getDieuKhoan());
	    }

	    Car updatedCar = carService.save(existingCar);
	    return ResponseEntity.ok(updatedCar);
	}


    @PutMapping("/cars/{id}")
    public ResponseEntity<Car> putCar(@PathVariable Long id, @RequestBody Car car) {
        Car existingCar = carService.findById(id);
        if (existingCar == null) {
            return ResponseEntity.notFound().build();
        }
        existingCar.setThongTinXe(car.getThongTinXe());
        existingCar.setChoNgoi(car.getChoNgoi());
        existingCar.setNhienLieuThu(car.getNhienLieuThu());
        existingCar.setLoaiNhienLieu(car.getLoaiNhienLieu());
        existingCar.setHopSo(car.getHopSo());
        existingCar.setGia(car.getGia());
        existingCar.setMoTa(car.getMoTa());
        existingCar.setDanhGia(car.getDanhGia());
        existingCar.setViTri(car.getViTri());
        existingCar.setAnh(car.getAnh());
        existingCar.setTrangThai(car.getTrangThai());
        existingCar.setLuotChoThue(car.getLuotChoThue());
        existingCar.setLuotDanhGia(car.getLuotDanhGia());
        existingCar.setDanhGiaTrungBinh(car.getDanhGiaTrungBinh());
        existingCar.setGiayToXe(car.getGiayToXe());
        existingCar.setGiaChoThue(car.getGiaChoThue());
        existingCar.setThongTinLienQuan(car.getThongTinLienQuan());
        existingCar.setDieuKhoan(car.getDieuKhoan());

        Car updatedCar = carService.save(existingCar);
        return ResponseEntity.ok(updatedCar);
    }



	@GetMapping("/cars/sort")
	public List<Car> sortCars(
			@RequestParam(value = "sortBy", required = true) String sortBy,
			@RequestParam(value = "ascending", defaultValue = "true") boolean ascending
			) {
		switch (sortBy.toLowerCase()) {
		case "price":
			return ascending ? SortCarService.sortByPriceAsc() : SortCarService.sortByPriceDesc();
		case "seats":
			return ascending ? SortCarService.sortBySeatsAsc() : SortCarService.sortBySeatsDesc();
		case "location":
			return ascending ? SortCarService.sortByLocationAsc() : SortCarService.sortByLocationDesc();
		default:
			throw new IllegalArgumentException("Invalid sortBy parameter.");
		}
	}
}


