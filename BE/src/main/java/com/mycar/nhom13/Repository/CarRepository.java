package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car,Integer>{
    
    Car findByCarId(Long id);
    
    Page<Car> findByStatus(String status, Pageable pageable);
	
}




