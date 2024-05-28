package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.Rental;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RentalRepository extends JpaRepository<Rental, Integer> {

	Rental findById(int rentalId);

	@Query("SELECT r FROM Rental r JOIN FETCH r.car")
    List<Rental> findAllWithCar();
}
