package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;
    
    public CarServiceImpl(CarRepository carRepository) {
    	this.carRepository=carRepository;
    }

    @Override
    public List<Car> findByStatus(String status) {
        return carRepository.findByStatus("active");
    }

	@Override
	public Car findByCarId(Long id) {
		return carRepository.findByCarId(id);
	}
	
	@Override
	public Car save(Car car) {
		return carRepository.save(car);
	}
	
	@Override
	public Car update(long id, Map<String, Object> fields) {
		
		Car car = carRepository.findByCarId(id);
		if(car != null) {
			
			fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(Car.class, key);
                field.setAccessible(true);

                ReflectionUtils.setField(field, car, value);
			  });
            return carRepository.save(car);
		}
		return null;
	}
}
