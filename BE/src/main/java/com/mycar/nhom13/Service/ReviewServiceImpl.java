package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Review;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.Repository.ReviewRepository;
import com.mycar.nhom13.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class ReviewServiceImpl implements  ReviewService{

    private final ReviewRepository repository;
    private final RentalService rentalService;

    public ReviewServiceImpl(ReviewRepository repository,RentalService rentalService){
        this.repository=repository;
        this.rentalService=rentalService;
    }
    @Override
    public List<Review> findAll() {
        return repository.findAll();
    }

    @Override
    public Review findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Review save(Review review,int rentalId) {
        review.setRental(rentalService.findById(rentalId));
        return repository.save(review);
    }

    @Override
    public Review update(int id, Map<String, Object> fields) {
        Review review = repository.findById(id);

        if( review != null) {

            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(User.class, key);
                field.setAccessible(true);

                ReflectionUtils.setField(field, review, value);
            });
            return repository.save(review);
        }
        return null;


    }
}
