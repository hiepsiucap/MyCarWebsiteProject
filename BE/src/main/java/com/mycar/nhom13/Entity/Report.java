package com.mycar.nhom13.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Reports")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_seq")
    @SequenceGenerator(name = "report_seq", sequenceName = "report_seq", allocationSize = 1)
    @Column(name = "report_id")
    private int reportId;
    @ManyToOne
    @JoinColumn(name = " rental_id")
    @JsonIgnore
    private Rental rental;
    @Column(name = "state")
    private String state;
    @Column(name = "details")
    @Size(min=1, message = "Nội dung không được để trống")
    private String details;

    public Report(){

    }

    public Report(int reportId, String state, String details) {
        this.reportId = reportId;
        this.state = state;
        this.details = details;
    }

    public int getReportId() {
        return reportId;
    }

    public void setReportId(int reportId) {
        this.reportId = reportId;
    }

    public Rental getRental() {
        return rental;
    }

    public void setRental(Rental rental) {
        this.rental = rental;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
