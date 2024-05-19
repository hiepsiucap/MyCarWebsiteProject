package com.mycar.nhom13.Entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="`user`")
//@JsonAutoDetect(fieldVisibility=JsonAutoDetect.Visibility.ANY, getterVisibility=JsonAutoDetect.Visibility.NONE,
//        setterVisibility=JsonAutoDetect.Visibility.NONE, creatorVisibility=JsonAutoDetect.Visibility.NONE)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private int userId;
    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email")
    private String email;
    @Column(name="phone_number")
    private String phoneNumber;
    @Column(name="driver_license")
    private String driverLicense;
    @Column(name="password")
    @JsonIgnore
    private String password;
    @Column(name="role")
    private String role;
    @Column(name="avatar")
    private String avatar;
    @Column(name="create_date")
    private LocalDate create_date;
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Rental> rentals;

    public User(){

    }

    public User(int userId, String firstName, String lastName, String email, String phoneNumber, String driverLicense, String password, String role, String avatar, LocalDate create_date) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.driverLicense = driverLicense;
        this.password = password;
        this.role = role;
        this.avatar = avatar;
        this.create_date = create_date;
    }

    public List<com.mycar.nhom13.Entity.Rental> getRentals() {
        return rentals;
    }

    public void setRentals(List<com.mycar.nhom13.Entity.Rental> rentals) {
        this.rentals = rentals;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setDriverLicense(String driverLicense) {
        this.driverLicense = driverLicense;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public void setCreate_date(LocalDate create_date) {
        this.create_date = create_date;
    }

    public int getUserId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getDriverLicense() {
        return driverLicense;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public String getAvatar() {
        return avatar;
    }

    public LocalDate getCreate_date() {
        return create_date;
    }
}
