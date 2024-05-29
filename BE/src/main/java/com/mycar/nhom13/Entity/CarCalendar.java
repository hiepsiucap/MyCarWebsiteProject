package com.mycar.nhom13.Entity;

import jakarta.persistence.*;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Car_calendars")
public class CarCalendar {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "calendar_seq")
	@SequenceGenerator(name = "calendar_seq", sequenceName = "calendar_seq", initialValue = 50, allocationSize = 1)
	@Column(name = "calendar_id")
	private int calendarId;

	@ManyToOne
	@JoinColumn(name = "car_id")
	@JsonBackReference(value = "calendar")
	private Car car;

	@Column(name = "start_date", nullable = false)
	@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date startDate;

	@Column(name = "end_date", nullable = false)
	@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date endDate;

	@Override
	public String toString() {
		return "CarCalendar [calendarId=" + calendarId + ", car=" + car + ", startDate=" + startDate + ", endDate="
				+ endDate + "]";
	}

	public CarCalendar(int calendarId, Car car, Date startDate, Date endDate) {
		super();
		this.calendarId = calendarId;
		this.car = car;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public CarCalendar() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getCalendarId() {
		return calendarId;
	}

	public void setCalendarId(int calendarId) {
		this.calendarId = calendarId;
	}

	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
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
