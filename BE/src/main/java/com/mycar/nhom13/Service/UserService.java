package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.User;

import java.util.List;
import java.util.Map;

public interface UserService {

    List<User> findAll();

    User findById(long id);
    User save(User taikhoan);

    User update(long id, Map<String, Object> fields);
}
