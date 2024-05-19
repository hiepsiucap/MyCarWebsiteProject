package com.mycar.nhom13.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Locations")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "location_seq")
    @SequenceGenerator(name = "location_seq", sequenceName = "locations_SEQ", allocationSize = 100)
    @Column(name ="location_id")
    private int locationId;
    @Column(name= "address")
    private String address;
    @Column(name="province")
    private String province;
    @Column(name="district")
    private String district;

    public Location(){

    }

    public Location(int locationId, String address, String province, String district) {
        this.locationId = locationId;
        this.address = address;
        this.province = province;
        this.district = district;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
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
}
