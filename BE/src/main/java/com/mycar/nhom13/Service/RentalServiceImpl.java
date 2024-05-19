package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.Repository.RentalRepository;
import com.mycar.nhom13.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class RentalServiceImpl implements  RentalService{

    private final RentalRepository repository;

    public RentalServiceImpl(RentalRepository repository){
        this.repository=repository;
    }
    @Override
    public List<Rental> findAll() {
        return repository.findAll();
    }

    @Override
    public Rental findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Rental save(Rental rental) {
        return repository.save(rental);
    }

    @Override
    public Rental update(int id, Map<String, Object> fields) {
        Rental rental = repository.findById(id);

        if( rental != null) {

            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(User.class, key);
                field.setAccessible(true);

                ReflectionUtils.setField(field, rental, value);
            });
            return repository.save(rental);
        }
        return null;


    }
}
