package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Car;
import com.mycar.nhom13.Entity.CarImage;
import com.mycar.nhom13.Repository.CarImageRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class CarImageServiceImpl implements CarImageService {

    private CarImageRepository carImageRepository;

    private final String path="D:\\MyCar\\BE\\Resource\\CarImages\\";

    public CarImageServiceImpl(CarImageRepository carImageRepository){
        this.carImageRepository=carImageRepository;
    }

    public CarImage saveImage(MultipartFile file) throws IOException {

        String imagePath = path + file.getOriginalFilename();
        CarImage carImage=carImageRepository.save(
                new CarImage(1,imagePath,file.getOriginalFilename())
        );
        file.transferTo(new File(imagePath));

        return carImage;
    }

    public byte[] retrieveImage(String fileName) throws IOException {
        Optional<CarImage> carImage = carImageRepository.findByName(fileName);
        String filePath = carImage.get().getImage();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }
}
