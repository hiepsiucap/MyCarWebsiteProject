package com.mycar.nhom13.Service;

import com.mycar.nhom13.Dto.LoginDTO;
import com.mycar.nhom13.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Objects;

@Service
public class AuthService {

	@Autowired
	private UserService userService;
	private final PasswordEncoder passwordEncoder;

	@Value("${security.jwt.token.secret-key:secret-key}")
	private String secretKey;

	public AuthService(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	public User authenticate(LoginDTO loginDTO) {

		User user = userService.findByEmail(loginDTO.getEmail());

		if (passwordEncoder.matches((loginDTO.getPassword()), user.getPassword())) {
			return user;
		}
		throw new RuntimeException("Invalid password");
	}

	public User findByLogin(String login) {
		User user = userService.findByEmail(login);
		if (user == null) {
			throw new RuntimeException("Invalid login");
		} else
			return user;
	}

	public String createToken(User user) {
		System.out.println(user.getUserId() + "&" + user.getEmail() + "&" + calculateHmac(user));
		return user.getUserId() + "&" + user.getEmail() + "&" + calculateHmac(user);
	}

	public User findByToken(String token) {
		String[] parts = token.split("&");

		long userId = Long.valueOf(parts[0]).longValue();
		String login = parts[1];
		String hmac = parts[2];

		User user = findByLogin(login);

//        if (!hmac.equals(calculateHmac(user)) || userId != user.getMaTK()) {
//            throw new RuntimeException("Invalid Cookie value");
//        }

		return user;
	}

	private String calculateHmac(User user) {
		byte[] secretKeyBytes = Objects.requireNonNull(secretKey).getBytes(StandardCharsets.UTF_8);
		byte[] valueBytes = Objects.requireNonNull(user.getUserId() + "&" + user.getEmail())
				.getBytes(StandardCharsets.UTF_8);

		try {
			Mac mac = Mac.getInstance("HmacSHA512");
			SecretKeySpec secretKeySpec = new SecretKeySpec(secretKeyBytes, "HmacSHA512");
			mac.init(secretKeySpec);
			byte[] hmacBytes = mac.doFinal(valueBytes);
			return Base64.getEncoder().encodeToString(hmacBytes);

		} catch (NoSuchAlgorithmException | InvalidKeyException e) {
			throw new RuntimeException(e);
		}
	}
}
