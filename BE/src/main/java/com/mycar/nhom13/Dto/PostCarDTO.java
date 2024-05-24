package com.mycar.nhom13.Dto;

public class PostCarDTO {
    private String licensePlates;
    private String model;
    private String brand;
    private int year;
    private String color;
    private float consumption;
    private String description;
    private int seat;
    private String type;
    private String gear;
    private String fuel;
    private String address;
    private String province;
    private String district;
    private int cost;
	public PostCarDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PostCarDTO(String licensePlates, String model, String brand, int year, String color, float consumption,
			String description, int seat, String type, String gear, String fuel, String address, String province,
			String district, int cost) {
		super();
		this.licensePlates = licensePlates;
		this.model = model;
		this.brand = brand;
		this.year = year;
		this.color = color;
		this.consumption = consumption;
		this.description = description;
		this.seat = seat;
		this.type = type;
		this.gear = gear;
		this.fuel = fuel;
		this.address = address;
		this.province = province;
		this.district = district;
		this.cost = cost;
	}
	public String getLicensePlates() {
		return licensePlates;
	}
	public void setLicensePlates(String licensePlates) {
		this.licensePlates = licensePlates;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public float getConsumption() {
		return consumption;
	}
	public void setConsumption(float consumption) {
		this.consumption = consumption;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getSeat() {
		return seat;
	}
	public void setSeat(int seat) {
		this.seat = seat;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getGear() {
		return gear;
	}
	public void setGear(String gear) {
		this.gear = gear;
	}
	public String getFuel() {
		return fuel;
	}
	public void setFuel(String fuel) {
		this.fuel = fuel;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}

}
