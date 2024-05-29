package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.Review;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Service.ReviewService;

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
public class ReviewController {

	private final ReviewService reviewService;

	public ReviewController(ReviewService reviewService) {

		this.reviewService = reviewService;
	}

	@GetMapping("/reviews")
	public ResponseEntity<List<Review>> retrieveAllReviews() {
		return new ResponseEntity<>(reviewService.findAll(), new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/reviews/{id}")
	public ResponseEntity<Review> retrieveReview(@PathVariable int id) {
		Review review = reviewService.findById(id);
		return new ResponseEntity<>(review, new HttpHeaders(), HttpStatus.OK);
	}

	@PostMapping("/rentals/{id}/reviews")
	public ResponseEntity<Review> postReview(@RequestBody @Valid Review review, @PathVariable int id, HttpServletRequest request) {

		int userId = getUserIdFromCookie(request);
		Review savedReview = reviewService.save(review, id,userId);

		return new ResponseEntity<>(savedReview, new HttpHeaders(), HttpStatus.CREATED);
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
