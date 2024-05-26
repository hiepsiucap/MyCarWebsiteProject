package com.mycar.nhom13.Config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

	private final String cloudName = "drvzczhve";

	private final String apiKey = "924982561549152";

	private final String apiSecret = "IOmRpitM57cHl4wOT9oaxnCyhrs";

	@Bean
	public Cloudinary cloudinary() {
		Cloudinary cloudinary = new Cloudinary(
				ObjectUtils.asMap("cloud_name", cloudName, "api_key", apiKey, "api_secret", apiSecret, "secure", true));

		return cloudinary;
	}
}
