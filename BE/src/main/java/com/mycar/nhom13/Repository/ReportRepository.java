package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Integer> {
	Report findById(int id);
}
