package com.mycar.nhom13.Dto;

public class RentalHistory {
    private int carId;
    private String name;
    private String rentalDate;
    private String carStatus;
    private int totalDay;
    private int totalCost;
    public RentalHistory(){

    }

    public RentalHistory(int carId, String name, String rentalDate, String carStatus, int totalDay, int totalCost) {
        this.carId = carId;
        this.name = name;
        this.rentalDate = rentalDate;
        this.carStatus = carStatus;
        this.totalDay = totalDay;
        this.totalCost = totalCost;
    }

    public int getCarId() {
        return carId;
    }

    public void setCarId(int carId) {
        this.carId = carId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTotalDay() {
        return totalDay;
    }

    public void setTotalDay(int totalDay) {
        this.totalDay = totalDay;
    }

    public int getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(int totalCost) {
        this.totalCost = totalCost;
    }

    public String getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(String rentalDate) {
        this.rentalDate = rentalDate;
    }

    public String getCarStatus() {
        return carStatus;
    }

    public void setCarStatus(String carStatus) {
        this.carStatus = carStatus;
    }


}
