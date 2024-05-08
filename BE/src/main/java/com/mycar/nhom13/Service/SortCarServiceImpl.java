package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SortCarServiceImpl implements SortCarService {

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<Car> sortByPriceAsc() {
        return carRepository.findAllByOrderByGiaAsc();
    }

    @Override
    public List<Car> sortByPriceDesc() {
        return carRepository.findAllByOrderByGiaDesc();
    }

    @Override
    public List<Car> sortBySeatsAsc() {
        return carRepository.findAllByOrderByChoNgoiAsc();
    }

    @Override
    public List<Car> sortBySeatsDesc() {
        return carRepository.findAllByOrderByChoNgoiDesc();
    }

    @Override
    public List<Car> sortByLocationAsc() {
        return carRepository.findAllByOrderByViTriAsc();
    }

    @Override
    public List<Car> sortByLocationDesc() {
        return carRepository.findAllByOrderByViTriDesc();
    }
}
