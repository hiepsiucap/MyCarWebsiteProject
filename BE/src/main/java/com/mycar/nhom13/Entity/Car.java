package com.mycar.nhom13.Entity;

import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "Cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "car_seq")
    @SequenceGenerator(name = "car_seq", sequenceName = "car_seq", allocationSize = 1)
    @Column(name = "car_id")
    private int carId;

    @Column(name = "license_plates", length = 10)
    private String licensePlates;

    @Column(name = "brand", length = 255)
    private String brand;

    @Column(name = "model", length = 255)
    private String model;

    @Column(name = "year")
    private int year;

    @Column(name = "color")
    private String color;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "mileage")
    private int mileage;

    @Column(name = "type", length = 50)
    private String type;

    @Column(name = "fuel", length = 10)
    private String fuel;

    @Column(name = "gear", length = 20)
    private String gear;

    @Column(name = "consumption")
    private Float consumption;

    @Column(name = "description", length = 2000)
    private String description;

    @Column(name = "review")
    private Float review;

    @Column(name = "number_of_review")
    private int numberOfReview;

    @Column(name = "image", length = 255)
    private String image;

    @Column(name = "status", length = 10)
    private String status;

    @Column(name = "seat")
    private int seat;

    @Column(name = "number_of_rental")
    private int numberOfRental;

    @Column(name = "cost")
    private int cost;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

	@OneToMany( mappedBy ="car")
	private List<CarImage> images;
    @OneToMany(mappedBy = "car")
    @JsonManagedReference
    private List<CarCalendar> carCalendars;

	@Override
	public String toString() {
		return "Car [carId=" + carId + ", licensePlates=" + licensePlates + ", brand=" + brand + ", model=" + model
				+ ", year=" + year + ", color=" + color + ", user=" + user + ", mileage=" + mileage + ", type=" + type
				+ ", fuel=" + fuel + ", gear=" + gear + ", consumption=" + consumption + ", description=" + description
				+ ", review=" + review + ", numberOfReview=" + numberOfReview + ", image=" + image + ", status="
				+ status + ", seat=" + seat + ", numberOfRental=" + numberOfRental + ", cost=" + cost + ", location="
				+ location + ", carCalendars=" + carCalendars + "]";
	}

	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Car(int carId, String licensePlates, String brand, String model, int year, String color, User user,
			int mileage, String type, String fuel, String gear, Float consumption, String description,
			Float review, int numberOfReview, String image, String status, int seat, int numberOfRental, int cost,
			Location location, List<CarCalendar> carCalendars) {
		super();
		this.carId = carId;
		this.licensePlates = licensePlates;
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.color = color;
		this.user = user;
		this.mileage = mileage;
		this.type = type;
		this.fuel = fuel;
		this.gear = gear;
		this.consumption = consumption;
		this.description = description;
		this.review = review;
		this.numberOfReview = numberOfReview;
		this.image = image;
		this.status = status;
		this.seat = seat;
		this.numberOfRental = numberOfRental;
		this.cost = cost;
		this.location = location;
		this.carCalendars = carCalendars;
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

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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

	public String getFuel() {
		return fuel;
	}

	public void setFuel(String fuel) {
		this.fuel = fuel;
	}

	public String getGear() {
		return gear;
	}

	public void setGear(String gear) {
		this.gear = gear;
	}

	public Float getConsumption() {
		return consumption;
	}

	public void setConsumption(Float consumption) {
		this.consumption = consumption;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Float getReview() {
		return review;
	}

	public void setReview(Float review) {
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

	public int getNumberOfRental() {
		return numberOfRental;
	}

	public void setNumberOfRental(int numberOfRental) {
		this.numberOfRental = numberOfRental;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public List<CarCalendar> getCarCalendars() {
		return carCalendars;
	}

	public void setCarCalendars(List<CarCalendar> carCalendars) {
		this.carCalendars = carCalendars;
	}

	public List<CarImage> getImages() {
		return images;
	}

	public void setImages(List<CarImage> images) {
		this.images = images;
	}
}



