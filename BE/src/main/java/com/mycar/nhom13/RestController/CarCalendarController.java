package com.mycar.nhom13.RestController;


import com.mycar.nhom13.Entity.CarCalendar;
import com.mycar.nhom13.Service.CarCalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carCalendars")
public class CarCalendarController {

    @Autowired
    private CarCalendarService carCalendarService;

    @GetMapping
    public List<CarCalendar> getAllCarCalendars() {
        return carCalendarService.findAll();
    }

    @PostMapping
    public CarCalendar createCarCalendar(@RequestBody CarCalendar carCalendar) {
        return carCalendarService.save(carCalendar);
    }

    @PutMapping("/{id}")
    public CarCalendar updateCarCalendar(@PathVariable int id, @RequestBody CarCalendar carCalendar) {
        carCalendar.setCalendarId(id);
        return carCalendarService.save(carCalendar);
    }


    @GetMapping("/car/{carId}")
    public List<CarCalendar> getCarCalendarsByCarId(@PathVariable Long carId) {
        return carCalendarService.findByCarId(carId);
    }
}
