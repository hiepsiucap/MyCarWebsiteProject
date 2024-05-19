package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.ExceptionHandler.UserNotFoundException;
import com.mycar.nhom13.Service.RentalService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
public class RentalController {

    private RentalService rentalService;

    public RentalController(RentalService rentalService){

        this.rentalService=rentalService;
    }
    @GetMapping("/rentals")
    public List<Rental> retrieveAllRentals(){
        return rentalService.findAll();
    }

    @GetMapping("/rentals/{id}")
    public Rental retrieveRental(@PathVariable int id){
        Rental rental = rentalService.findById(id);

        if(rental == null)
            throw new UserNotFoundException("User id " + id +" not found");
        return rental;
    }

    @PostMapping("/rentals")
    public ResponseEntity<Rental> postRental(@RequestBody Rental rental){

        Rental savedRental =rentalService.save(rental);

        return new ResponseEntity<>(savedRental,new HttpHeaders(), HttpStatus.CREATED);
    }

    @PatchMapping("/rentals/{id}")
    public ResponseEntity<Rental> updateRental(@PathVariable int id, @RequestBody Map<String, Object> fields) {
        Rental updatedRental = rentalService.update(id, fields);
        if (updatedRental == null)
            throw new UserNotFoundException("User id: " + id + " not found");
        return new ResponseEntity<>(updatedRental, new HttpHeaders(), HttpStatus.OK);
    }
}
