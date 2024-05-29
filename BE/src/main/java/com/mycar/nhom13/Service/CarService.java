package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.web.multipart.MultipartFile;

public interface CarService {

	Car findByCarId(int id);

	Car save(Car car);

	Car update(int id, Map<String, Object> fields);

	Page<Car> findByStatus(String status, Pageable pageable);
	
	Page<Car> findByStatusIsNull(Pageable pageable);
	
	Page<Car> findByCalendar(String startDate, String endDate, Pageable pageable);

	List<Car> findCarsByRentalStatus(@Param("status") String status, @Param("userId") int userId);

	List<Car> findAllCarsByUserIdInRentalgnorePending(@Param("userId") int userId);

	List<Car> findAllCarsByUserIdInRental(@Param("userId") int userId);
	
	List<Car> findCarsByUserId(@Param("userId") int userId);

	public Page<Car> filterCars(List<String> brand, List<String> types, Integer minPrice, Integer maxPrice,
			List<String> fuels, List<String> province, List<String> district, Pageable pageable);

	public void pauseCar(int id);

	Car saveThumbnail(MultipartFile file, int id) throws IOException;

	Car saveImages(List<MultipartFile> file, int id) throws IOException;
}
