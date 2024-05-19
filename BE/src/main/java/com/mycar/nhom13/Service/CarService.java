package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;

import java.util.List;
import java.util.Map;

public interface CarService {
	public List<Car> findByStatus(String status);
    
    Car findByCarId(Long id);

	Car save(Car car);
	
	Car update(long id, Map<String, Object> fields);
    
}
