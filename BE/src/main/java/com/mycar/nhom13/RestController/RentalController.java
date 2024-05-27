package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Dto.RentalBrowse;
import com.mycar.nhom13.Dto.RentalDTO;
import com.mycar.nhom13.Dto.StringResponse;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Service.RentalService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RentalController {

	private RentalService rentalService;

	public RentalController(RentalService rentalService) {

		this.rentalService = rentalService;
	}

	@GetMapping("/rentals")
	public ResponseEntity<List<Rental>> retrieveAllRentals() {
		return new ResponseEntity<>(rentalService.findAll(), new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/rentals/{id}")
	public ResponseEntity<Rental> retrieveRental(@PathVariable int id) {

		return new ResponseEntity<>(rentalService.findById(id), new HttpHeaders(), HttpStatus.OK);

	}

	@PostMapping("/rentals")
	public ResponseEntity<Rental> postRental(@RequestBody RentalDTO rentalDTO, HttpServletRequest request)
			throws Exception {
		int id = getUserIdFromCookie(request);

		Rental savedRental = rentalService.save(rentalDTO, id, rentalDTO.getCarId());

		return new ResponseEntity<>(savedRental, new HttpHeaders(), HttpStatus.CREATED);
	}

	@PatchMapping("/rentals/{id}")
	public ResponseEntity<Rental> updateRentalStatus(@PathVariable int id, @RequestParam("status") String status,
			HttpServletRequest request) {
		int userId = getUserIdFromCookie(request);
		Rental updatedRental = rentalService.updateStatus(id, status, userId);

		return new ResponseEntity<>(updatedRental, new HttpHeaders(), HttpStatus.OK);
	}

	@DeleteMapping("/rentals/{id}")
	public ResponseEntity<StringResponse> deleteRental(@PathVariable int id, HttpServletRequest request) {

		int userId = getUserIdFromCookie(request);

		String result = rentalService.remove(id,userId);

		return new ResponseEntity<>(new StringResponse(result), new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/rentals/staff")
	public ResponseEntity<List<RentalBrowse>> getRentalToCheck(HttpServletRequest request){
		int id = getUserIdFromCookie(request);
		return new ResponseEntity<>(rentalService.getRentalToCheck(id), new HttpHeaders(), HttpStatus.OK);
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
