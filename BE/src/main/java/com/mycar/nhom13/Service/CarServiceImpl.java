package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;
    
    public CarServiceImpl(CarRepository carRepository) {
    	this.carRepository=carRepository;
    }

    @Override
    public List<Car> getActiveCars() {
        return carRepository.findByTrangThai("active");
    }

	@Override
	public Car findById(Number maxe) {
		return carRepository.findById(maxe);
	}

	@Override
	public Car save(Car car) {
		return carRepository.save(car);
	}
}
