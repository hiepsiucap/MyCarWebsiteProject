package com.mycar.nhom13.Service;

import com.mycar.nhom13.Dto.ReportDTO;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.Report;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.RentalException;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.ExceptionHandler.UnAuthenticated;
import com.mycar.nhom13.Mapper.CarMapper;
import com.mycar.nhom13.Repository.RentalRepository;
import com.mycar.nhom13.Repository.ReportRepository;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
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
	public Report save(Report report, int id,int userId) {
		User user=userService.findById(userId);
		Rental rental = rentalRepository.findById(id);
		if(user.getUserId()==rental.getUser().getUserId() || user.getUserId()==rental.getCar().getUser().getUserId()){
			report.setState("Pending");
			report.setDate(LocalDate.now());
			report.setRental(rentalRepository.findById(id));
			return repository.save(report);
		}
		else {
			throw new RentalException("Chỉ có người thuê hoặc chủ xe mới được khiếu nại");

		}
	}

	@Override
	public Report update(String status, int id,int userId) {
		User user=userService.findById(userId);
		if(user.getRole().equals("User")){
			throw new UnAuthenticated("No permission");
		}
		Report report = this.findById(id);
		report.setState(status);

		return repository.save(report);
	}

	@Override
	public List<ReportDTO> listforStaff(int id) {
		User user = userService.findById(id);
		if (user.getRole().equals("User")) {
			throw new UnAuthenticated("No permission");
		}
		List<ReportDTO> list = new ArrayList<>();
		List<Report> reportList = this.findAll();
		for (Report r : reportList) {
			ReportDTO reportDTO  = new ReportDTO();
			reportDTO.setReport(r);
			reportDTO.setRental(r.getRental());
			reportDTO.setCarDTO(CarMapper.carToCarDTO(r.getRental().getCar()));
			list.add(reportDTO);
		}
		Collections.sort(list, (o1, o2) -> {
			String status1 = o1.getReport().getState();
			String status2 = o2.getReport().getState();

			if (status1.equals("Pending") && status2.equals("completed")) {
				return -1;
			} else if (status1.equals("completed") && status2.equals("Pending")) {
				return 1;
			} else {
				return status1.compareTo(status2);
			}
		});
		return list;

	}

}
