package com.mycar.nhom13.Service;

import org.springframework.web.multipart.MultipartFile;

public interface CloudinaryService {

	String uploadImage(MultipartFile file, String folder, String imageName);
}
