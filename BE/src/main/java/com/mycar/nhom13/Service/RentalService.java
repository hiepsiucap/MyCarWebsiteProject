package com.mycar.nhom13.Service;


import com.mycar.nhom13.Dto.RentalDTO;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;


import java.util.List;
import java.util.Map;

public interface RentalService {

    List<Rental> findAll();

    Rental findById(int id);
    Rental save(RentalDTO rentalDTO, int id) throws Exception;

    Rental updateStatus(int rentalId, String status,int userId);

    String remove(int id);

}
