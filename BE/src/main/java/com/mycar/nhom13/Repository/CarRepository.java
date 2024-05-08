package com.mycar.nhom13.Repository;
import com.mycar.nhom13.Entity.Car;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car,Long>{
	List<Car> findByTrangThai(String type);

	List<Car> findAllByOrderByGiaAsc();

	List<Car> findAllByOrderByGiaDesc();

	List<Car> findAllByOrderByChoNgoiAsc();

	List<Car> findAllByOrderByChoNgoiDesc();

	List<Car> findAllByOrderByViTriAsc();

	List<Car> findAllByOrderByViTriDesc();

	public Car findById(Number maxe);
}




