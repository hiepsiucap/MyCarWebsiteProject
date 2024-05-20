package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CarService {

    
    Car findByCarId(Long id);

	Car save(Car car);
	
	Car update(long id, Map<String, Object> fields);
    
	Page<Car> findByStatus(String status, Pageable pageable);
}
