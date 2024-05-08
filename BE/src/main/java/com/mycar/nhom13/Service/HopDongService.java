package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.HopDong;

import java.util.List;

public interface HopDongService {

    List<HopDong> findAll();

    HopDong save(HopDong hopDong);

    HopDong findById(long id);
}
