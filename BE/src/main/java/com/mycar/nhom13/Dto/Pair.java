package com.mycar.nhom13.Dto;

public class Pair {
	private String name;
	private Integer profit;

	public Pair() {

	}

	public Pair(String name, Integer price) {
		this.name = name;
		this.profit = price;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getProfit() {
		return profit;
	}

	public void setProfit(Integer profit) {
		this.profit = profit;
	}
}
