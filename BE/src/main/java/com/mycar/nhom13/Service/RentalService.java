package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;

import java.util.List;
import java.util.Map;

public interface RentalService {

    List<Rental> findAll();

    Rental findById(int id);
    Rental save(Rental rental);

    Rental update(int id, Map<String, Object> fields);
}
