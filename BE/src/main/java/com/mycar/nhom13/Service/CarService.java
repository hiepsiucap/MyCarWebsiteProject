package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface CarService {

	List<Car> findAll();
    
    Car findByCarId(Long id);

	Car save(Car car);
	
	Car update(long id, Map<String, Object> fields);
    
	Page<Car> findByStatus(String status, Pageable pageable);
	
	List<Car> findCarsByRentalStatus(@Param("status") String status, @Param("userId") Long userId);
}
