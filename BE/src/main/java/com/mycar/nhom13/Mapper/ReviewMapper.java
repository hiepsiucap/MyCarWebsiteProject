package com.mycar.nhom13.Mapper;

import java.time.LocalDate;

import com.mycar.nhom13.Dto.ReviewDTO;
import com.mycar.nhom13.Entity.Review;

public class ReviewMapper {
	public static ReviewDTO reviewToReviewDTO(Review review) {
		ReviewDTO reviewDTO = new ReviewDTO();
		reviewDTO.setAva(review.getRental().getUser().getAvatar());
		reviewDTO.setUserId(String.valueOf(review.getRental().getUser().getUserId()));
		reviewDTO.setName(review.getRental().getUser().getLastName() + review.getRental().getUser().getFirstName());
		reviewDTO.setRate(review.getRate());
		reviewDTO.setDetail(review.getDetails());
		LocalDate date = review.getDate();
		if (date != null) {
			reviewDTO.setDate(date.toString());
		} else {
			reviewDTO.setDate(null);
		}
		return reviewDTO;

	}
}
