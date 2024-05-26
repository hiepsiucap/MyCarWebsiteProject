package com.mycar.nhom13.Dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class PatchCarDTO {

	private int carId;

	@NotBlank(message = "License plates cannot be empty")
	@Size(min = 9, max = 10, message = "License plates must be between 9 and 10 characters")
	private String licensePlates;

	@Size(max = 20, message = "Model must be less than or equal to 20 characters")
	private String model;

	private String brand;

	@Min(value = 1886, message = "Year must be from 1886 onwards")
	@Max(value = 2024, message = "Year must be 2024 or earlier")
	private int year;

	private String color;

	@DecimalMin(value = "0.0", message = "Consumption must be at least 0.0")
	private float consumption;

	@Size(max = 2000, message = "Description must be less than or equal to 2000 characters")
	private String description;

	@Min(value = 1, message = "Seat count must be at least 1")
	private int seat;

	private String type;

	@Pattern(regexp = "Tu dong|So san", message = "Gear must be 'Tu dong' or 'So san'")
	private String gear;

	@Pattern(regexp = "Xang|Dau|Dien", message = "Fuel must be 'Xang', 'Dau', or 'Dien'")
	private String fuel;

	private int mileage;

	private String address;
	private String province;
	private String district;

	@Min(value = 0, message = "Cost must be at least 0")
	private int cost;
	
	private String status;

	public PatchCarDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PatchCarDTO(int carId,
			@NotBlank(message = "License plates cannot be empty") @Size(min = 9, max = 10, message = "License plates must be between 9 and 10 characters") String licensePlates,
			@Size(max = 20, message = "Model must be less than or equal to 20 characters") String model, String brand,
			@Min(value = 1886, message = "Year must be from 1886 onwards") @Max(value = 2024, message = "Year must be 2024 or earlier") int year,
			String color, @DecimalMin(value = "0.0", message = "Consumption must be at least 0.0") float consumption,
			@Size(max = 2000, message = "Description must be less than or equal to 2000 characters") String description,
			@Min(value = 1, message = "Seat count must be at least 1") int seat, String type,
			@Pattern(regexp = "Tu dong|So san", message = "Gear must be 'Tu dong' or 'So san'") String gear,
			@Pattern(regexp = "Xang|Dau|Dien", message = "Fuel must be 'Xang', 'Dau', or 'Dien'") String fuel,
			int mileage, String address, String province, String district,
			@Min(value = 0, message = "Cost must be at least 0") int cost, String status) {
		super();
		this.carId = carId;
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
		this.mileage = mileage;
		this.address = address;
		this.province = province;
		this.district = district;
		this.cost = cost;
		this.status = status;
	}

	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
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

	public int getMileage() {
		return mileage;
	}

	public void setMileage(int mileage) {
		this.mileage = mileage;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
