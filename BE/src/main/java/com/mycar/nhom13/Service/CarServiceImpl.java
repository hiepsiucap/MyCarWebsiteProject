package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.CarImage;
import com.mycar.nhom13.Entity.CarSpecification;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Repository.CarImageRepository;
import com.mycar.nhom13.Repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class CarServiceImpl implements CarService {

	@Autowired
	private CarRepository carRepository;
	@Autowired
	private CloudinaryService cloudinaryService;
	@Autowired
	private CarImageRepository carImageRepository;

	public CarServiceImpl(CarRepository carRepository, CloudinaryService cloudinaryService,
			CarImageRepository carImageRepository) {
		this.carRepository = carRepository;
		this.cloudinaryService = cloudinaryService;
		this.carImageRepository = carImageRepository;
	}

	@Override
	public Car findByCarId(int id) {
		Car car = carRepository.findByCarId(id);
		if (car != null) {
			return car;
		} else {
			throw new ResourceNotFoundException("Car id " + id + " not found");
		}
	}

	@Override
	public Car save(Car car) {
		return carRepository.save(car);
	}

	@Override
	public Car update(int id, Map<String, Object> fields) {

		Car car = carRepository.findByCarId(id);
		if (car != null) {

			fields.forEach((key, value) -> {
				Field field = ReflectionUtils.findField(Car.class, key);
				field.setAccessible(true);

				ReflectionUtils.setField(field, car, value);
			});
			return carRepository.save(car);
		} else {
			throw new ResourceNotFoundException("Car id " + id + " not found");
		}
	}

	@Override
	public Page<Car> findByStatus(String status, Pageable pageable) {
		return carRepository.findByStatus("active", pageable);
	}
	
	@Override
	public Page<Car> findByStatusIsNull(Pageable pageable){
		return carRepository.findByStatusIsNull(pageable);
	}

	@Override
	public List<Car> findCarsByUserId(@Param("userId") int userId){
		return carRepository.findMyCarsByUserId(userId);
	}
	
	@Override
	public List<Car> findCarsByRentalStatus(@Param("status") String status, @Param("userId") int userId) {
		return carRepository.findCarsByRentalStatus(status, userId);
	}

	@Override
	public List<Car> findAllCarsByUserIdInRental(@Param("userId") int userId) {
		return carRepository.findCarsByUserId(userId);
	}

	@Override
	public List<Car> findAllCarsByUserIdInRentalgnorePending(@Param("userId") int userId) {
		return carRepository.findCarsByUserIdIgnorePending(userId);
	}

	@Override
	public Page<Car> filterCars(List<String> brand, List<String> types, Integer minPrice, Integer maxPrice,
			List<String> fuels, List<String> province, List<String> district, Pageable pageable) {
		return carRepository.findAll(
				CarSpecification.filterByCriteria(brand, types, minPrice, maxPrice, fuels, province, district), pageable);
	}
	
	@Override
	public Page<Car> findByCalendar(String startDate, String endDate, Pageable pageable) {
        return carRepository.findByCalendar(startDate, endDate, pageable);
    }

	@Override
	public void pauseCar(int id) {
		Car car = carRepository.findById(id).orElse(null);
		if (car != null) {
			car.setStatus("pause");
			carRepository.save(car);
		} else {
			throw new ResourceNotFoundException("Car id " + id + " not found");
		}
	}

	public Car saveThumbnail(MultipartFile file, int id) throws IOException {
		Car car = carRepository.findByCarId(id);
		if (car == null)
			throw new ResourceNotFoundException("Car id: " + id + " not found");
		String imageName = "car_id_" + car.getCarId();
		String folder = "cars/thumbnail";
		String url = cloudinaryService.uploadImage(file, folder, imageName);
		car.setImage(url);
		return carRepository.save(car);
	}

	public Car saveImages(List<MultipartFile> file, int id) throws IOException {
		Car car = carRepository.findByCarId(id);
		if (car == null)
			throw new ResourceNotFoundException("Car id: " + id + " not found");

		List<CarImage> images = new ArrayList<>();
		int count = 1;
		for (MultipartFile f : file) {
			String imageName = "car_id_" + car.getCarId() + "image_id_" + count;
			String folder = "cars/images";
			String url = cloudinaryService.uploadImage(f, folder, imageName);
			CarImage carImage = new CarImage();
			carImage.setImage(url);
			carImage.setCar(car);
			images.add(carImageRepository.save(carImage));
			count++;
		}
		car.setImages(images);
		return carRepository.save(car);

	}

}
