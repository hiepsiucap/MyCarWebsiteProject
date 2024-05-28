package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.Car;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CarRepository extends JpaRepository<Car, Integer>, JpaSpecificationExecutor<Car> {

	Car findByCarId(int id);

	Page<Car> findByStatus(String status, Pageable pageable);

	Page<Car> findByStatusIsNull(Pageable pageable);
	
	@Query(value = "SELECT c.* FROM Cars c INNER JOIN car_calendars s ON s.car_id = c.car_id WHERE s.start_date >= TO_DATE(:startDate, 'YYYY-MM-DD') AND s.end_date <= TO_DATE(:endDate, 'YYYY-MM-DD')", nativeQuery = true)
	Page<Car> findByCalendar(@Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable);


	@Query(value = "SELECT c.* FROM Cars c INNER JOIN Rentals r ON r.car_id = c.car_id WHERE r.customer_id = :userId AND  r.rental_status = :status", nativeQuery = true)
	List<Car> findCarsByRentalStatus(@Param("status") String status, @Param("userId") int userId);

	@Query(value = "SELECT c.* FROM Cars c INNER JOIN Rentals r ON r.car_id = c.car_id WHERE r.customer_id = :userId", nativeQuery = true)
	List<Car> findCarsByUserId(@Param("userId") int userId);

	@Query(value = "SELECT c.* FROM Cars c INNER JOIN Rentals r ON r.car_id = c.car_id WHERE r.customer_id = :userId AND r.rental_status != 'pending'", nativeQuery = true)
	List<Car> findCarsByUserIdIgnorePending(@Param("userId") int userId);
	
	@Query(value = "SELECT c.* FROM Cars c WHERE c.user_id = :userId", nativeQuery = true)
	List<Car> findMyCarsByUserId(@Param("userId") int userId);
}
