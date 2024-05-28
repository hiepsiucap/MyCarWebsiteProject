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
	
	@Query(value = "SELECT \r\n"
			+ "    c.car_id, \r\n"
			+ "    c.license_plates, \r\n"
			+ "    c.brand, \r\n"
			+ "    c.model, \r\n"
			+ "    c.year, \r\n"
			+ "    c.color, \r\n"
			+ "    c.user_id, \r\n"
			+ "    c.mileage, \r\n"
			+ "    c.type, \r\n"
			+ "    c.fuel, \r\n"
			+ "    c.gear, \r\n"
			+ "    c.consumption, \r\n"
			+ "    c.description, \r\n"
			+ "    c.review, \r\n"
			+ "    c.number_of_review, \r\n"
			+ "    c.image, \r\n"
			+ "    c.status, \r\n"
			+ "    c.seat, \r\n"
			+ "    c.number_of_rental, \r\n"
			+ "    c.cost, \r\n"
			+ "    c.location_id  FROM Cars c WHERE NOT EXISTS (SELECT 1 FROM car_calendars s WHERE s.car_id = c.car_id AND (s.start_date <= TO_DATE(:endDate, 'DD-MON-YY') AND s.end_date >= TO_DATE(:startDate, 'DD-MON-YY')))", nativeQuery = true)
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
