package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.TaiKhoan;
import com.mycar.nhom13.Entity.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface UserService {

    List<User> findAll();

    User findById(int id);
    User save(User user);

    User update(int id, Map<String, Object> fields);

    User findByEmail(String email);

    User saveLicense(MultipartFile file, int id) throws IOException;
    User saveAvatar(MultipartFile file, int id) throws IOException;

}
