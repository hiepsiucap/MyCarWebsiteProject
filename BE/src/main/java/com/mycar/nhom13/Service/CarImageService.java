package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.CarImage;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface  CarImageService {

    public CarImage saveImage(MultipartFile file)throws IOException;
    public byte[] retrieveImage(String fileName) throws IOException;


}
