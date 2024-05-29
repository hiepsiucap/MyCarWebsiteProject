package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Review;
import com.mycar.nhom13.Entity.User;

import java.util.List;
import java.util.Map;

public interface ReviewService {

	List<Review> findAll();

	Review findById(int id);

	Review save(Review review, int rentalId, int userId);

	Review update(int id, Map<String, Object> fields);
}
