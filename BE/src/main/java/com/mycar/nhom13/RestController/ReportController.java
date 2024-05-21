package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.Report;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Service.ReportService;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService){

        this.reportService=reportService;
    }
    @GetMapping("/reports")
    public List<Report> retrieveAllReports(){
        return reportService.findAll();
    }

    @GetMapping("/reports/{id}")
    public Report retrieveReport(@PathVariable int id){
        Report report = reportService.findById(id);

        if(report == null)
            throw new ResourceNotFoundException("User id " + id +" not found");
        return report;
    }

    @PostMapping("/rentals/{id}/reports")
    public ResponseEntity<Report> postReports(@RequestBody @Valid Report report, @PathVariable int id){

        Report savedReport =reportService.save(report,id);

        return new ResponseEntity<>(savedReport,new HttpHeaders(), HttpStatus.CREATED);
    }

    @PatchMapping("/reports/{id}")
    public ResponseEntity<Report> updateReview(@PathVariable int id, @RequestBody Map<String, Object> fields) {
        Report updatedReport = reportService.update(id, fields);
        if (updatedReport == null)
            throw new ResourceNotFoundException("User id: " + id + " not found");
        return new ResponseEntity<>(updatedReport, new HttpHeaders(), HttpStatus.OK);
    }
}
