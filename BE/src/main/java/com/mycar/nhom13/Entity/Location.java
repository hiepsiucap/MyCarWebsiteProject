package com.mycar.nhom13.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name = "Locations")
public class Location {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "location_seq")
	@SequenceGenerator(name = "location_seq", sequenceName = "location_seq", allocationSize = 1)
	@Column(name = "location_id")
	private Long locationId;

	@Column(name = "address", nullable = false, length = 255)
	private String address;

	@Column(name = "province", nullable = false, length = 255)
	private String province;

	@Column(name = "district", nullable = false, length = 50)
	private String district;

	@OneToMany(mappedBy = "location")
	@JsonBackReference(value = "location")
	private List<Car> cars;

	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Location [locationId=" + locationId + ", address=" + address + ", province=" + province + ", district="
				+ district + ", cars=" + cars + "]";
	}

	public Location(Long locationId, String address, String province, String district, List<Car> cars) {
		super();
		this.locationId = locationId;
		this.address = address;
		this.province = province;
		this.district = district;
		this.cars = cars;
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

	public List<Car> getCars() {
		return cars;
	}

	public void setCars(List<Car> cars) {
		this.cars = cars;
	}

	public Long getLocationId() {
		return locationId;
	}

	public void setLocationId(Long locationId) {
		this.locationId = locationId;
	}

}
