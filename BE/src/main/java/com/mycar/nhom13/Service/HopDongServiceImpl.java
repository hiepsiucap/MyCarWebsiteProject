package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.HopDong;
import com.mycar.nhom13.Repository.HopDongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HopDongServiceImpl implements HopDongService{
    private final HopDongRepository hopDongRepository;
    @Autowired
    public HopDongServiceImpl(final HopDongRepository hopDongRepository){
        this.hopDongRepository = hopDongRepository;
    }

    @Override
    public List<HopDong> findAll(){
        return hopDongRepository.findAll();
    }
    @Override
    public HopDong save(HopDong hopDong){
        return hopDongRepository.save(hopDong);
    }

    @Override
    public HopDong findById(long id){
        return hopDongRepository.findById(id);
    }
}
