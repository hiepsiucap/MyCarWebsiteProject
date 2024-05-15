package com.mycar.nhom13.Repository;
import com.mycar.nhom13.Entity.Car;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car,Long>{
    
    Car findByCarId(Long id);
    
    List<Car> findByStatus(String status);
	
}




