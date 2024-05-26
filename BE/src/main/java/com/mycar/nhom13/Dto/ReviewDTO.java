package com.mycar.nhom13.Dto;

public class ReviewDTO {
	private String ava;
	private String userId;
	private String name;
	private int rate;
	private String detail;
	private String date;

	public ReviewDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ReviewDTO(String ava, String userId, String name, int rate, String detail, String date) {
		super();
		this.ava = ava;
		this.userId = userId;
		this.name = name;
		this.rate = rate;
		this.detail = detail;
		this.date = date;
	}

	public String getAva() {
		return ava;
	}

	public void setAva(String ava) {
		this.ava = ava;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

}
