package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.TaiKhoan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TaiKhoanRepository extends JpaRepository<TaiKhoan,Long> {
        TaiKhoan findById (long MaTk);

        @Query(value = "SELECT tk from TaiKhoan tk where tk.TenTK = :TenTK")
        TaiKhoan findByTenTK (String TenTK);
}
