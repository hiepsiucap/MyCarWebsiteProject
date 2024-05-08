package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;
import java.util.List;

public interface CarService {
    List<Car> getActiveCars();

	Car findById(Number maxe);
	Car save(Car car);
}
