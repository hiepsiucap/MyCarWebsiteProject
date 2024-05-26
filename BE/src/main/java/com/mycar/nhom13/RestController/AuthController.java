package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Authentication.CookiesAuthenticationFilter;
import com.mycar.nhom13.Dto.RegisterDTO;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.Service.AuthService;
import com.mycar.nhom13.Service.UserService;
import jakarta.servlet.http.Cookie;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.nio.CharBuffer;
import java.time.Duration;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@RestController
public class AuthController {
	public AuthController(UserService userService, AuthService authService, PasswordEncoder passwordEncoder) {
		this.userService = userService;
		this.authService = authService;
		this.passwordEncoder = passwordEncoder;
	}

	private final UserService userService;
	private final AuthService authService;
	private final PasswordEncoder passwordEncoder;

	@PostMapping("/login")
	public ResponseEntity<User> login(@AuthenticationPrincipal User user, HttpServletResponse response) {
		Cookie authCookie = new Cookie(CookiesAuthenticationFilter.COOKIE_NAME, authService.createToken(user));
		authCookie.setHttpOnly(true);
		authCookie.setSecure(true);
		authCookie.setMaxAge((int) Duration.of(1, ChronoUnit.DAYS).toSeconds());
		authCookie.setPath("/");

		response.addCookie(authCookie);

		return ResponseEntity.ok(user);
	}

	@PostMapping("/register")

	public ResponseEntity<String> register(@RequestBody @Valid RegisterDTO registerDto) {

		if (userService.findByEmail(registerDto.getEmail()) != null) {
			return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
		}

		User user = new User();
		user.setEmail(registerDto.getEmail());
		user.setPassword(passwordEncoder.encode(CharBuffer.wrap(registerDto.getPassword())));
		user.setFirstName(registerDto.getFirstName());
		user.setLastName(registerDto.getLastName());
		user.setPhoneNumber(registerDto.getPhoneNumber());
		user.setCreate_date(LocalDate.now());
		user.setRole("User");
		userService.save(user);

		return new ResponseEntity<>("User registered success!", HttpStatus.OK);
	}

	@PostMapping("/signOut")

	public ResponseEntity<Void> signOut(@AuthenticationPrincipal User user, HttpServletResponse response,
			HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		if (cookies != null)
			for (Cookie cookie : cookies) {
				if (cookie.getName().equals("auth_by_cookie")) {
					cookie.setValue("");
					cookie.setPath("/");
					cookie.setMaxAge(0);
					response.addCookie(cookie);
				}
			}
		SecurityContextHolder.clearContext();
		return ResponseEntity.noContent().build();
	}

}
