package com.mycar.nhom13.Dto;

import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;

public class RentalBrowse {
    private Rental rental;
    private CarDTO carDTO;


    public RentalBrowse(){

    }


    public RentalBrowse(Rental rental, CarDTO carDTO) {
        this.rental = rental;
        this.carDTO = carDTO;
    }

    public Rental getRental() {
        return rental;
    }

    public void setRental(Rental rental) {
        this.rental = rental;
    }

    public CarDTO getCarDTO() {
        return carDTO;
    }

    public void setCarDTO(CarDTO carDTO) {
        this.carDTO = carDTO;
    }
}
