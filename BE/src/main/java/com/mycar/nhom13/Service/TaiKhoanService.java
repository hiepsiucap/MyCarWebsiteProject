package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.TaiKhoan;

import java.util.List;
import java.util.Map;

public interface TaiKhoanService {

    List<TaiKhoan> findAll();

    TaiKhoan findById(long id);
    TaiKhoan save(TaiKhoan taikhoan);

    TaiKhoan update(long id, Map<String, Object> fields);

    TaiKhoan findByTenTK(String TenTK);
}
