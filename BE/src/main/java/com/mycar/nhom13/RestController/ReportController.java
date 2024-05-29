package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Dto.ReportDTO;
import com.mycar.nhom13.Entity.Report;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Service.ReportService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
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

	public ReportController(ReportService reportService) {

		this.reportService = reportService;
	}



	@GetMapping("/reports/{id}")
	public ResponseEntity<Report> retrieveReport(@PathVariable int id) {
		Report report = reportService.findById(id);

		return new ResponseEntity<>(report, new HttpHeaders(), HttpStatus.OK);
	}

	@PostMapping("/rentals/{id}/reports")
	public ResponseEntity<Report> postReports(@RequestBody @Valid Report report, @PathVariable int id, HttpServletRequest request) {
		int userId = getUserIdFromCookie(request);
		Report savedReport = reportService.save(report, id,userId);

		return new ResponseEntity<>(savedReport, new HttpHeaders(), HttpStatus.CREATED);
	}

	@PatchMapping("/rentals/{id}/reports")
	public ResponseEntity<Report> patchReport(@RequestParam("status") String status, @PathVariable int id,HttpServletRequest request) {
		int userId= getUserIdFromCookie(request);
		Report savedReport = reportService.update(status, id, userId);

		return new ResponseEntity<>(savedReport, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/reports/staff")
	public ResponseEntity<List<ReportDTO>> listForStaff(HttpServletRequest request) {
		int id = getUserIdFromCookie(request);

		return new ResponseEntity<>(reportService.listforStaff(id), new HttpHeaders(), HttpStatus.OK);
	}

	private int getUserIdFromCookie(HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if (cookie.getName().equals("auth_by_cookie")) {
					String cookieValue = cookie.getValue();
					String[] parts = cookieValue.split("&");
					return Integer.parseInt(parts[0]);
				}
			}
		}
		return 0;
	}

}
