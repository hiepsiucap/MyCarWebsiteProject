package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.CarImage;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface CarImageRepository extends JpaRepository<CarImage, Integer> {

}
