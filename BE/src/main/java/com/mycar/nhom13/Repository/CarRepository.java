package com.mycar.nhom13.Repository;
import com.mycar.nhom13.Entity.Car;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CarRepository extends JpaRepository<Car,Long>{
    
    Car findByCarId(Long id);
    
    Page<Car> findByStatus(String status, Pageable pageable);
    
    List<Car> findAll();
    
    @Query(value = "SELECT c.* FROM Cars c INNER JOIN Rentals r ON r.car_id = c.car_id WHERE r.customer_id = :userId AND r.rental_status = :status", nativeQuery = true)
    List<Car> findCarsByRentalStatus(@Param("status") String status, @Param("userId") Long userId);



}




