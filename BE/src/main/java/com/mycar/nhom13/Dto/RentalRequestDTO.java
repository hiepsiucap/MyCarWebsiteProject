package com.mycar.nhom13.Dto;

public class RentalRequestDTO {
    private String pickUpDate;
    private String pickUpHours;
    private String dropOffDate;
    private String dropOffHours;
    private int totalCost;

    public RentalRequestDTO(){

    }

    public RentalRequestDTO(String pickUpDate, String pickUpHours, String dropOffDate, String dropOffHours, int totalCost) {
        this.pickUpDate = pickUpDate;
        this.pickUpHours = pickUpHours;
        this.dropOffDate = dropOffDate;
        this.dropOffHours = dropOffHours;
        this.totalCost = totalCost;
    }

    public String getPickUpDate() {
        return pickUpDate;
    }

    public void setPickUpDate(String pickUpDate) {
        this.pickUpDate = pickUpDate;
    }

    public String getPickUpHours() {
        return pickUpHours;
    }

    public void setPickUpHours(String pickUpHours) {
        this.pickUpHours = pickUpHours;
    }

    public String getDropOffDate() {
        return dropOffDate;
    }

    public void setDropOffDate(String dropOffDate) {
        this.dropOffDate = dropOffDate;
    }

    public String getDropOffHours() {
        return dropOffHours;
    }

    public void setDropOffHours(String dropOffHours) {
        this.dropOffHours = dropOffHours;
    }

    public int getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(int totalCost) {
        this.totalCost = totalCost;
    }
}
