package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface CarService {

    
    Car findByCarId(Long id);

	Car save(Car car);
	
	Car update(long id, Map<String, Object> fields);
    
	Page<Car> findByStatus(String status, Pageable pageable);
	
	List<Car> findCarsByRentalStatus(@Param("status") String status, @Param("userId") int userId);
	
    public List<Car> filterCars(
            String brand, List<String> types, Integer minPrice, Integer maxPrice, 
            List<String> fuels, String province); 
    
    public void pauseCar(int id);
}
