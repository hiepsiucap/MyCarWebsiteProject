package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findById(int userId);

	User findByEmail(String email);

}
