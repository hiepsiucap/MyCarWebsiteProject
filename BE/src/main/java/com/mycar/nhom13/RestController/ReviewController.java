package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.Review;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Service.ReviewService;

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

    public ReviewController(ReviewService reviewService){

        this.reviewService=reviewService;
    }
    @GetMapping("/reviews")
    public List<Review> retrieveAllReviews(){
        return reviewService.findAll();
    }

    @GetMapping("/reviews/{id}")
    public Review retrieveReview(@PathVariable int id){
        Review review = reviewService.findById(id);
        return review;
    }

    @PostMapping("/rentals/{id}/reviews")
    public ResponseEntity<Review> postReview(@RequestBody @Valid Review review, @PathVariable int id){

        Review savedReview =reviewService.save(review,id);

        return new ResponseEntity<>(savedReview,new HttpHeaders(), HttpStatus.CREATED);
    }


}
