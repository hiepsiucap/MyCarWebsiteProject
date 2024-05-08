package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;
import java.util.List;

public interface SortCarService {
    List<Car> sortByPriceAsc();
    List<Car> sortByPriceDesc();
    List<Car> sortBySeatsAsc();
    List<Car> sortBySeatsDesc();
    List<Car> sortByLocationAsc();
    List<Car> sortByLocationDesc();
}
