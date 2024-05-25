package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Review;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.ExceptionHandler.ReviewException;
import com.mycar.nhom13.Repository.ReviewRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
public class ReviewServiceImpl implements  ReviewService{

    private final ReviewRepository reviewRepository;
    private final RentalService rentalService;

    public ReviewServiceImpl(ReviewRepository reviewRepository, RentalService rentalService){
        this.reviewRepository = reviewRepository;
        this.rentalService=rentalService;
    }
    @Override
    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    @Override
    public Review findById(int id) {
        Review review= reviewRepository.findById(id);
        if(review == null)
            throw new ResourceNotFoundException("Review id " + id +" not found");
        return review;
    }

    @Override
    public Review save(Review review,int rentalId) {
        if(rentalService.findById(rentalId).getReview() != null)
            throw new ReviewException("Mỗi lần thuê chỉ được đánh giá một lần");
        review.setDate(LocalDate.now());
        review.setRental(rentalService.findById(rentalId));
        return reviewRepository.save(review);
    }

    @Override
    public Review update(int id, Map<String, Object> fields) {
        Review review = reviewRepository.findById(id);

        if( review != null) {

            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(User.class, key);
                field.setAccessible(true);

                ReflectionUtils.setField(field, review, value);
            });
            return reviewRepository.save(review);
        }
        return null;


    }
}
