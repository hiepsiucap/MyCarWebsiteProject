package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.CarCalendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarCalendarRepository extends JpaRepository<CarCalendar, Integer> {

}
