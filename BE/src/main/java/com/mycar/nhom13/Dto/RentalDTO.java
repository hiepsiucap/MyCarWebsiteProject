package com.mycar.nhom13.Dto;

public class RentalDTO {
    private int car_Id;
    private String pick_up_date;
    private String pick_up_hours;
    private String drop_off_date;
    private String drop_off_hours;
    private int total_cost;

    public int getCar_Id() {
        return car_Id;
    }

    public void setCar_Id(int car_Id) {
        this.car_Id = car_Id;
    }

    public String getPick_up_date() {
        return pick_up_date;
    }

    public void setPick_up_date(String pick_up_date) {
        this.pick_up_date = pick_up_date;
    }

    public String getPick_up_hours() {
        return pick_up_hours;
    }

    public void setPick_up_hours(String pick_up_hours) {
        this.pick_up_hours = pick_up_hours;
    }

    public String getDrop_off_date() {
        return drop_off_date;
    }

    public void setDrop_off_date(String drop_off_date) {
        this.drop_off_date = drop_off_date;
    }

    public String getDrop_off_hours() {
        return drop_off_hours;
    }

    public void setDrop_off_hours(String drop_off_hours) {
        this.drop_off_hours = drop_off_hours;
    }

    public int getTotal_cost() {
        return total_cost;
    }

    public void setTotal_cost(int total_cost) {
        this.total_cost = total_cost;
    }
}
