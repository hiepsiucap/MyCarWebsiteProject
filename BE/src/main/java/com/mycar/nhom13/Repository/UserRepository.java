package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
        User findById (long MaTk);
}
