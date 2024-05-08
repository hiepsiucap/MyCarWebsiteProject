package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Report;
import com.mycar.nhom13.Entity.User;

import java.util.List;
import java.util.Map;

public interface ReportService {

    List<Report> findAll();

    Report findById(int id);
    Report save(Report report, int id);

    Report update(int id, Map<String, Object> fields);
}
