package com.mycar.nhom13.Dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class CarCalendarDTO {

	private int calendarId;

	private int carId;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date startDate;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date endDate;

	public CarCalendarDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CarCalendarDTO(int calendarId, int carId, Date startDate, Date endDate) {
		super();
		this.calendarId = calendarId;
		this.carId = carId;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public int getCalendarId() {
		return calendarId;
	}

	public void setCalendarId(int calendarId) {
		this.calendarId = calendarId;
	}

	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

}
