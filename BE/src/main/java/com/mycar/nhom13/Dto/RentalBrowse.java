package com.mycar.nhom13.Dto;

import com.mycar.nhom13.Entity.User;

public class RentalBrowse {
    private int rentalId;
    private CarDTO carDTO;

    private User user;

    public RentalBrowse(){

    }

    public RentalBrowse(int rentalId, CarDTO carDTO, User user) {
        this.rentalId = rentalId;
        this.carDTO = carDTO;
        this.user = user;
    }

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    public CarDTO getCarDTO() {
        return carDTO;
    }

    public void setCarDTO(CarDTO carDTO) {
        this.carDTO = carDTO;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
