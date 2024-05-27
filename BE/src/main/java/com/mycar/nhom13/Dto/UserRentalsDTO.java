package com.mycar.nhom13.Dto;

public class UserRentalsDTO {
    private int carId;

    private int rentalId;
    private String name;
    private String dropOffDate;
    private String location;
    private int rentCount;

    private String status;
    private int hoursLeft;
    private float review;
    private String gear;
    private String thumbnail;

    public UserRentalsDTO(){

    }

    public UserRentalsDTO(int carId, int rentalId, String name, String dropOffDate, String location, int rentCount, String status, int hoursLeft, float review, String gear, String thumbnail) {
        this.carId = carId;
        this.rentalId = rentalId;
        this.name = name;
        this.dropOffDate = dropOffDate;
        this.location = location;
        this.rentCount = rentCount;
        this.status = status;
        this.hoursLeft = hoursLeft;
        this.review = review;
        this.gear = gear;
        this.thumbnail = thumbnail;
    }

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
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

    public String getDropOffDate() {
        return dropOffDate;
    }

    public void setDropOffDate(String dropOffDate) {
        this.dropOffDate = dropOffDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getRentCount() {
        return rentCount;
    }

    public void setRentCount(int rentCount) {
        this.rentCount = rentCount;
    }

    public int getHoursLeft() {
        return hoursLeft;
    }

    public void setHoursLeft(int hoursLeft) {
        this.hoursLeft = hoursLeft;
    }

    public float getReview() {
        return review;
    }

    public void setReview(float review) {
        this.review = review;
    }

    public String getGear() {
        return gear;
    }

    public void setGear(String gear) {
        this.gear = gear;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}
