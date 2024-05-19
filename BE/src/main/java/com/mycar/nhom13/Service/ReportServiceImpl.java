package com.mycar.nhom13.Service;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.Report;
import com.mycar.nhom13.Repository.RentalRepository;
import com.mycar.nhom13.Repository.ReportRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class ReportServiceImpl implements  ReportService{

    private final ReportRepository repository;

    private final RentalRepository rentalRepository;
    public ReportServiceImpl(ReportRepository repository,RentalRepository rentalRepository){
        this.repository=repository;
        this.rentalRepository=rentalRepository;
    }
    @Override
    public List<Report> findAll() {
        return repository.findAll();
    }

    @Override
    public Report findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Report save(Report report, int id) {
        report.setRental(rentalRepository.findById(id));
        return repository.save(report);
    }

    @Override
    public Report update(int id, Map<String, Object> fields) {
        Report report = repository.findById(id);

        if( report != null) {

            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(Report.class, key);
                field.setAccessible(true);

                ReflectionUtils.setField(field, report, value);
            });
            return repository.save(report);
        }
        return null;


    }
}
