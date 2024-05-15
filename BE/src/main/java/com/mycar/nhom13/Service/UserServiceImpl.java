package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    public UserServiceImpl(UserRepository repository){
        this.repository=repository;
    }
    @Override
    public List<User> findAll() {
        return repository.findAll();
    }

    @Override
    public User findById(long id) {
        return repository.findById(id);
    }

    @Override
    public User save(User taikhoan) {
        return repository.save(taikhoan);
    }

    @Override
    public User update(long id, Map<String, Object> fields) {
        User user = repository.findById(id);

        if( user != null) {

            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(User.class, key);
                field.setAccessible(true);

                ReflectionUtils.setField(field, user, value);
            });
            return repository.save(user);
        }
        return null;


    }
}
