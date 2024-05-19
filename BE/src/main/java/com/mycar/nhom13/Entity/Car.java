package com.mycar.nhom13.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "car_id")
    private Long carId;

    @Column(name = "license_plates")
    private String licensePlates;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model")
    private String model;

    @Column(name = "year")
    private int year;
    
    @Column(name = "user_id")
    private Long userId;


    @Column(name = "color")
    private String color;

    @Column(name = "mileage")
    private int mileage;
    
    @Column(name ="type")
    private String type;
    
    @Column(name = "gear")
    private String gear;
    
    @Column(name = "fuel")
    private String fuel;
    
    @Column(name = "consumption")
    private double consumption;

    @Column(name = "description", length = 2000)
    private String description;

    @Column(name = "review")
    private double review;

    @Column(name = "number_of_review")
    private int numberOfReview;

    @Column(name = "image")
    private String image;

    @Column(name = "status")
    private String status;

    @Column(name = "seat")
    private int seat;

    @Column(name = "cost")
    private int cost;
    
    @Column(name = "number_of_rental")
    private int numberOfRental;
    
    @Column(name = "location_id")
    private int locationId;

	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Car(Long carId, String licensePlates, String brand, String model, int year, Long userId, String color,
			   int mileage, String type, String gear, String fuel, double consumption, String description, long review,
			   int numberOfReview, String image, String status, int seat, int cost, int numberOfRental, int locationId) {
		super();
		this.carId = carId;
		this.licensePlates = licensePlates;
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.userId = userId;
		this.color = color;
		this.mileage = mileage;
		this.type = type;
		this.gear = gear;
		this.fuel = fuel;
		this.consumption = consumption;
		this.description = description;
		this.review = review;
		this.numberOfReview = numberOfReview;
		this.image = image;
		this.status = status;
		this.seat = seat;
		this.cost = cost;
		this.numberOfRental = numberOfRental;
		this.locationId = locationId;
	}

	public Long getCarId() {
		return carId;
	}

	public void setCarId(Long carId) {
		this.carId = carId;
	}

	public String getLicensePlates() {
		return licensePlates;
	}

	public void setLicensePlates(String licensePlates) {
		this.licensePlates = licensePlates;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getMileage() {
		return mileage;
	}

	public void setMileage(int mileage) {
		this.mileage = mileage;
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

	public double getConsumption() {
		return consumption;
	}

	public void setConsumption(double consumption) {
		this.consumption = consumption;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getReview() {
		return review;
	}

	public void setReview(double review) {
		this.review = review;
	}

	public int getNumberOfReview() {
		return numberOfReview;
	}

	public void setNumberOfReview(int numberOfReview) {
		this.numberOfReview = numberOfReview;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getSeat() {
		return seat;
	}

	public void setSeat(int seat) {
		this.seat = seat;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public int getNumberOfRental() {
		return numberOfRental;
	}

	public void setNumberOfRental(int numberOfRental) {
		this.numberOfRental = numberOfRental;
	}

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}

	@Override
	public String toString() {
		return "Car [carId=" + carId + ", licensePlates=" + licensePlates + ", brand=" + brand + ", model=" + model
				+ ", year=" + year + ", userId=" + userId + ", color=" + color + ", mileage=" + mileage + ", type="
				+ type + ", gear=" + gear + ", fuel=" + fuel + ", consumption=" + consumption + ", description="
				+ description + ", review=" + review + ", numberOfReview=" + numberOfReview + ", image=" + image
				+ ", status=" + status + ", seat=" + seat + ", cost=" + cost + ", numberOfRental=" + numberOfRental
				+ ", locationId=" + locationId + "]";
	}
	
	

}

