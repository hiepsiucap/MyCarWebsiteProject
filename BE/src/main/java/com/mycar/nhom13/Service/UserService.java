package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.TaiKhoan;
import com.mycar.nhom13.Entity.User;

import java.util.List;
import java.util.Map;

public interface UserService {

    List<User> findAll();

    User findById(int id);
    User save(User user);

    User update(int id, Map<String, Object> fields);

    User findByEmail(String email);
}
