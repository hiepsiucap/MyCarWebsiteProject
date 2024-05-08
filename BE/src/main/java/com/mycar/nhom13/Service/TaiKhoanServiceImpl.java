package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.TaiKhoan;
import com.mycar.nhom13.ExceptionHandler.UserNotFoundException;
import com.mycar.nhom13.Repository.TaiKhoanRepository;
import org.springframework.cglib.core.ReflectUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service
public class TaiKhoanServiceImpl implements  TaiKhoanService{

    private final TaiKhoanRepository repository;

    public TaiKhoanServiceImpl(TaiKhoanRepository repository){
        this.repository=repository;
    }
    @Override
    public List<TaiKhoan> findAll() {
        return repository.findAll();
    }

    @Override
    public TaiKhoan findById(long id) {
        return repository.findById(id);
    }

    @Override
    public TaiKhoan save(TaiKhoan taikhoan) {
        return repository.save(taikhoan);
    }

    @Override
    public TaiKhoan update(long id, Map<String, Object> fields) {
        TaiKhoan user = repository.findById(id);

        if( user != null) {

            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(TaiKhoan.class, key);
                field.setAccessible(true);

                ReflectionUtils.setField(field, user, value);
            });
            return repository.save(user);
        }
        return null;


    }
}
