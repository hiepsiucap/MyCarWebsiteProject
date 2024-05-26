package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

	Review findById(int id);

}
