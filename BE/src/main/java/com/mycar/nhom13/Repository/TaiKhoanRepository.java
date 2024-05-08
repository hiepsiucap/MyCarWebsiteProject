package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.TaiKhoan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaiKhoanRepository extends JpaRepository<TaiKhoan,Long> {
        TaiKhoan findById (long MaTk);
}
