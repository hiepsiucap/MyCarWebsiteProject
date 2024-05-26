package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.Rental;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<Rental, Integer> {

	Rental findById(int rentalId);

}
