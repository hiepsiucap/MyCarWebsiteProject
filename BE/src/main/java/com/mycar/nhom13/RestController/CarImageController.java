package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.CarImage;
import com.mycar.nhom13.Service.CarImageServiceImpl;
import oracle.ucp.proxy.annotation.Post;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class CarImageController {

    private CarImageServiceImpl service;

    public CarImageController(CarImageServiceImpl service){
        this.service=service;
    }
    @PostMapping("/cars/image")
    public ResponseEntity<?> saveCarImage(@RequestParam("image")MultipartFile file) throws IOException{
        CarImage uploadImage = service.saveImage(file);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage.getImage());
    }
}
