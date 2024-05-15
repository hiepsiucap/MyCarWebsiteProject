package com.mycar.nhom13.Entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="user_id")
    @JsonProperty("userId")
    private int userId;
    @Column(name="first_name")
    @JsonProperty("firstName")
    private String firstName;

    @Column(name="last_name")
    @JsonProperty("lastName")
    private String lastName;

    @Column(name="email")
    @JsonProperty("email")
    private String email;
    @Column(name="phone_number")
    @JsonProperty("phoneNumber")
    private String phoneNumber;
    @Column(name="driver_license")
    @JsonProperty("driverLicense")
    private String driverLicense;

    @Column(name="driver_license_check")
    @JsonProperty("driverLicenseCheck")
    private String driverLicenseCheck;
    @Column(name="password")
    @JsonProperty("password")
    private String password;
    @Column(name="role")
    @JsonProperty("role")
    private String role;
    @Column(name="avatar")
    @JsonProperty("avatar")
    private String avatar;
    @Column(name="create_date")
    @JsonProperty("createDate")
    private LocalDate createDate;
    @OneToMany( mappedBy = "user")
    List<Car> cars;
    public User(){

    }

    public User(int userId, String firstName, String lastName, String email, String phoneNumber, String driverLicense, String driverLicenseCheck, String password, String role, String avatar, LocalDate createDate) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.driverLicense = driverLicense;
        this.driverLicenseCheck = driverLicenseCheck;
        this.password = password;
        this.role = role;
        this.avatar = avatar;
        this.createDate = createDate;
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

    public String getDriverLicenseCheck() {
        return driverLicenseCheck;
    }

    public void setDriverLicenseCheck(String driverLicenseCheck) {
        this.driverLicenseCheck = driverLicenseCheck;
    }

    public LocalDate getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
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

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }
}
