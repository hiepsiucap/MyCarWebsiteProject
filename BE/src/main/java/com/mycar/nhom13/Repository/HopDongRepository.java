package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.HopDong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HopDongRepository extends JpaRepository<HopDong, Long> {
    HopDong findById(long MaHD);
}
