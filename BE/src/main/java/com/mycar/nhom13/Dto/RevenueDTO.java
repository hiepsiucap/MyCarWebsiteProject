package com.mycar.nhom13.Dto;

import java.util.List;

public class RevenueDTO {
	private int totalCar;
	private int totalRevenue;
	private int totalRent;
	private List<Integer> monthRevenue;
	private List<Integer> monthRent;
	private List<String> topCar;
	private List<Integer> topRentCar;

	public RevenueDTO() {

	}

	public RevenueDTO(int totalCar, int totalRevenue, int totalRent, List<Integer> monthRevenue,
			List<Integer> monthRent, List<String> topCar, List<Integer> topRentCar) {
		this.totalCar = totalCar;
		this.totalRevenue = totalRevenue;
		this.totalRent = totalRent;
		this.monthRevenue = monthRevenue;
		this.monthRent = monthRent;
		this.topCar = topCar;
		this.topRentCar = topRentCar;
	}

	public int getTotalCar() {
		return totalCar;
	}

	public void setTotalCar(int totalCar) {
		this.totalCar = totalCar;
	}

	public int getTotalRevenue() {
		return totalRevenue;
	}

	public void setTotalRevenue(int totalRevenue) {
		this.totalRevenue = totalRevenue;
	}

	public int getTotalRent() {
		return totalRent;
	}

	public void setTotalRent(int totalRent) {
		this.totalRent = totalRent;
	}

	public List<Integer> getMonthRevenue() {
		return monthRevenue;
	}

	public void setMonthRevenue(List<Integer> monthRevenue) {
		this.monthRevenue = monthRevenue;
	}

	public List<Integer> getMonthRent() {
		return monthRent;
	}

	public void setMonthRent(List<Integer> monthRent) {
		this.monthRent = monthRent;
	}

	public List<String> getTopCar() {
		return topCar;
	}

	public void setTopCar(List<String> topCar) {
		this.topCar = topCar;
	}

	public List<Integer> getTopRentCar() {
		return topRentCar;
	}

	public void setTopRentCar(List<Integer> topRentCar) {
		this.topRentCar = topRentCar;
	}
}
