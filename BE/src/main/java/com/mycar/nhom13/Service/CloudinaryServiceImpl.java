package com.mycar.nhom13.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryServiceImpl implements CloudinaryService {
	private final Cloudinary cloudinary;

	public CloudinaryServiceImpl(Cloudinary cloudinary) {
		this.cloudinary = cloudinary;
	}

	@Override
	public String uploadImage(MultipartFile file, String folder, String imageName) {
		try {
			Map params = ObjectUtils.asMap("public_id", folder + "/" + imageName, "overwrite", true);
			Map data = cloudinary.uploader().upload(file.getBytes(), params);
			return (String) data.get("url");
		} catch (IOException io) {
			throw new RuntimeException("Image upload fail");
		}
	}
}
