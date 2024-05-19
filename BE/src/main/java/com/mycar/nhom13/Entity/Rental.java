package com.mycar.nhom13.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name ="rentals")
public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "rental_id")
    private int rentalId;

    //private Car car;
    //private String pick_up_location_id INT NOT NULL,
    //drop_off_location_id INT NOT NULL,
    @Column(name="pick_up_date")
    private LocalDate pickUpDate;
    @Column(name = "pick_up_hours")
    private String pickUpHours;
    @Column(name="drop_off_date")
    private LocalDate dropOffDate;
    @Column(name = "drop_off_hours")
    private String dropOffHours;
    @Column(name = "total_day")
    private int totalDay;
    @Column(name = "total_cost")
    private int totalCost;
    @Column(name = "rental_status")
    private String rentalStatus;
    @OneToOne(mappedBy = "rental")
    private Review review;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private User user;


    public Rental(){

    }

    public Rental(int rentalId, LocalDate pickUpDate, String pickUpHours, LocalDate dropOffDate, String dropOffHours, int totalDay, int totalCost, String rentalStatus) {
        this.rentalId = rentalId;
        this.pickUpDate = pickUpDate;
        this.pickUpHours = pickUpHours;
        this.dropOffDate = dropOffDate;
        this.dropOffHours = dropOffHours;
        this.totalDay = totalDay;
        this.totalCost = totalCost;
        this.rentalStatus = rentalStatus;
    }

    public Review getReview() {
        return review;
    }

    public void setReview(Review review) {
        this.review = review;
    }

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }



    public LocalDate getPickUpDate() {
        return pickUpDate;
    }

    public void setPickUpDate(LocalDate pickUpDate) {
        this.pickUpDate = pickUpDate;
    }

    public String getPickUpHours() {
        return pickUpHours;
    }

    public void setPickUpHours(String pickUpHours) {
        this.pickUpHours = pickUpHours;
    }

    public LocalDate getDropOffDate() {
        return dropOffDate;
    }

    public void setDropOffDate(LocalDate dropOffDate) {
        this.dropOffDate = dropOffDate;
    }

    public String getDropOffHours() {
        return dropOffHours;
    }

    public void setDropOffHours(String dropOffHours) {
        this.dropOffHours = dropOffHours;
    }

    public int getTotalDay() {
        return totalDay;
    }

    public void setTotalDay(int totalDay) {
        this.totalDay = totalDay;
    }

    public int getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(int totalCost) {
        this.totalCost = totalCost;
    }

    public String getRentalStatus() {
        return rentalStatus;
    }

    public void setRentalStatus(String rentalStatus) {
        this.rentalStatus = rentalStatus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
