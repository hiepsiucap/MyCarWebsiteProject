package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.Report;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.ExceptionHandler.UnAuthenticated;
import com.mycar.nhom13.Repository.RentalRepository;
import com.mycar.nhom13.Repository.ReportRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ReportServiceImpl implements ReportService {

	private final ReportRepository repository;

	private final RentalRepository rentalRepository;

	private final UserService userService;

	public ReportServiceImpl(ReportRepository repository, RentalRepository rentalRepository, UserService userService) {
		this.repository = repository;
		this.rentalRepository = rentalRepository;
		this.userService = userService;
	}

	@Override
	public List<Report> findAll() {
		return repository.findAll();
	}

	@Override
	public Report findById(int id) {
		Report report = repository.findById(id);
		if (report == null)
			throw new ResourceNotFoundException("Report id " + id + " not found");
		return report;
	}

	@Override
	public Report save(Report report, int id) {
		report.setState("Pending");
		report.setDate(LocalDate.now());
		report.setRental(rentalRepository.findById(id));
		return repository.save(report);
	}

	@Override
	public Report update(String status, int id) {
		Report report = this.findById(id);
		report.setState("status");

		return repository.save(report);
	}

	@Override
	public List<Report> listforStaff(int id) {
		User user = userService.findById(id);
		if (user.getRole().equals("User")) {
			throw new UnAuthenticated("No permission");
		}
		List<Report> reportList = repository.findAll();
		return reportList.stream().filter(report -> report.getState().equals("Pending")).collect(Collectors.toList());

	}

}
