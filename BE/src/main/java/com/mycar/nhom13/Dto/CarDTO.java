package com.mycar.nhom13.Dto;

import java.util.List;

import com.mycar.nhom13.Entity.CarCalendar;
import com.mycar.nhom13.Entity.CarImage;

public class CarDTO {
	private String name;
	private int seat;
	private String gear;
	private String fuel;
	private Float consumption;
	private String description;
	private int cost;
	private String district;
	private String province;
	private String address;
	private List<CarCalendar> days;
	private List<ReviewDTO> reviews;
	private List<CarImage> images;

	public CarDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CarDTO(String name, int seat, String gear, String fuel, Float consumption, String description, int cost,
			String district, String province, String address, List<CarCalendar> days, List<ReviewDTO> reviews,
			List<CarImage> images) {
		super();
		this.name = name;
		this.seat = seat;
		this.gear = gear;
		this.fuel = fuel;
		this.consumption = consumption;
		this.description = description;
		this.cost = cost;
		this.district = district;
		this.province = province;
		this.address = address;
		this.days = days;
		this.reviews = reviews;
		this.images = images;
	}

	@Override
	public String toString() {
		return "CarDTO [name=" + name + ", seat=" + seat + ", gear=" + gear + ", fuel=" + fuel + ", consumption="
				+ consumption + ", description=" + description + ", cost=" + cost + ", district=" + district
				+ ", province=" + province + ", address=" + address + ", days=" + days + ", reviews=" + reviews
				+ ", images=" + images + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getSeat() {
		return seat;
	}

	public void setSeat(int seat) {
		this.seat = seat;
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

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<CarCalendar> getDays() {
		return days;
	}

	public void setDays(List<CarCalendar> days) {
		this.days = days;
	}

	public List<ReviewDTO> getReviews() {
		return reviews;
	}

	public void setReviews(List<ReviewDTO> reviews) {
		this.reviews = reviews;
	}

	public List<CarImage> getImages() {
		return images;
	}

	public void setImages(List<CarImage> images) {
		this.images = images;
	}

}
