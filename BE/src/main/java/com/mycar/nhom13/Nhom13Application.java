package com.mycar.nhom13;

import com.mycar.nhom13.Entity.TaiKhoan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@SpringBootApplication
public class Nhom13Application{

	public static void main(String[] args) {
		SpringApplication.run(Nhom13Application.class, args);
	}


}
