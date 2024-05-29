package com.mycar.nhom13.Dto;

import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.Report;

public class ReportDTO {
    private Report report;
    private Rental rental;

    private CarDTO carDTO;

    public ReportDTO(){

    }

    public Report getReport() {
        return report;
    }

    public void setReport(Report report) {
        this.report = report;
    }

    public Rental getRental() {
        return rental;
    }

    public void setRental(Rental rental) {
        this.rental = rental;
    }

    public CarDTO getCarDTO() {
        return carDTO;
    }

    public void setCarDTO(CarDTO carDTO) {
        this.carDTO = carDTO;
    }

    public ReportDTO(Report report, Rental rental, CarDTO carDTO) {
        this.report = report;
        this.rental = rental;
        this.carDTO = carDTO;
    }
}
