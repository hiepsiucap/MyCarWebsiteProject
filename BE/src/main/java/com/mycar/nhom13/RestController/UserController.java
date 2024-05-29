package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Dto.*;
import com.mycar.nhom13.Entity.Rental;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ChangePasswordException;
import com.mycar.nhom13.Service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

import jakarta.validation.Valid;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class UserController {

	private UserService userService;

	public UserController(UserService userService) {

		this.userService = userService;
	}

	@GetMapping("/users")
	public List<User> retrieveAllUsers() {
		return userService.findAll();
	}

	@GetMapping("/users/{id}")
	public User retrieveUser(@PathVariable int id) {
		return userService.findById(id);
	}

	@GetMapping("/users/current")
	public User retrieveCurrentUser(HttpServletRequest request) {
		int id = getUserIdFromCookie(request);

		return userService.findById(id);
	}

	@PostMapping("/users")
	public ResponseEntity<User> postUser(@RequestBody @Valid User user) {

		User savedUser = userService.save(user);

		return new ResponseEntity<>(savedUser, new HttpHeaders(), HttpStatus.CREATED);
	}

	@PatchMapping("/users")
	public ResponseEntity<User> updateUser(HttpServletRequest request,
			@RequestBody @Valid ChangeUserInfoDTO changeUserInfoDTO) {
		int id = getUserIdFromCookie(request);
		User updatedUser = userService.update(id, changeUserInfoDTO);

		return new ResponseEntity<>(updatedUser, new HttpHeaders(), HttpStatus.OK);
	}

	@PostMapping("/users/license")
	public ResponseEntity<User> uploadLicense(@RequestParam("image") MultipartFile file, HttpServletRequest request)
			throws IOException {
		int id = getUserIdFromCookie(request);
		User savedUser = userService.saveLicense(file, id);
		return new ResponseEntity<>(savedUser, new HttpHeaders(), HttpStatus.OK);

	}

	@PostMapping("/users/avatar")
	public ResponseEntity<User> uploadAvatar(@RequestParam("image") MultipartFile file, HttpServletRequest request)
			throws IOException {
		int id = getUserIdFromCookie(request);
		User savedUser = userService.saveAvatar(file, id);
		return new ResponseEntity<>(savedUser, new HttpHeaders(), HttpStatus.OK);

	}

	@PostMapping("/users/licensecheck")
	public ResponseEntity<User> checkLicense(HttpServletRequest request, @RequestParam("id") int id,
			@RequestParam("check") boolean check) {
		int staffId = getUserIdFromCookie(request);
		User checked = userService.checkLicense(staffId, id, check);
		return new ResponseEntity<>(checked, new HttpHeaders(), HttpStatus.OK);
	}

	@PatchMapping("/users/changepassword")
	public ResponseEntity<StringResponse> changePassword(@RequestBody @Valid ChangePasswordDTO changePasswordDto,
			HttpServletRequest httpServletRequest) {
		int id = getUserIdFromCookie(httpServletRequest);
		boolean isPasswordChanged = userService.changePassword(changePasswordDto, id);

		return new ResponseEntity<>(new StringResponse("Đổi mật khẩu thành công"), new HttpHeaders(), HttpStatus.OK);

	}

	@GetMapping("/users/revenue")
	public ResponseEntity<RevenueDTO> getRevenue(HttpServletRequest request) {
		int id = getUserIdFromCookie(request);
		RevenueDTO revenueDTO = userService.getRevenue(id);
		return new ResponseEntity<>(revenueDTO, new HttpHeaders(), HttpStatus.OK);

	}

	@GetMapping("/users/rentals")
	public ResponseEntity<List<UserRentalsDTO>> getRentals(HttpServletRequest request) {
		int id = getUserIdFromCookie(request);
		List<UserRentalsDTO> rentals = userService.getRentals(id);
		return new ResponseEntity<>(rentals, new HttpHeaders(), HttpStatus.OK);

	}

	@GetMapping("/users/allrentals")
	public ResponseEntity<List<UserRentalsDTO>> getAllRentals(HttpServletRequest request) {
		int id = getUserIdFromCookie(request);
		List<UserRentalsDTO> rentals = userService.getAllRentals(id);
		return new ResponseEntity<>(rentals, new HttpHeaders(), HttpStatus.OK);

	}

	@GetMapping("/users/numofrentals")
	public ResponseEntity<StringResponse> getNumOfRental(HttpServletRequest request) {
		int id = getUserIdFromCookie(request);

		return new ResponseEntity<>(new StringResponse(userService.getNumOfRental(id).toString()), new HttpHeaders(),
				HttpStatus.OK);

	}

	@GetMapping("/users/staff/license")
	public ResponseEntity<List<User>> getListForStaff(HttpServletRequest request) {

		int id = getUserIdFromCookie(request);

		List<User> list = userService.getListNeedCheck(id);

		return new ResponseEntity<>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/users/cars/history")
	public ResponseEntity<List<RentalHistory>> getAllCarHistory(HttpServletRequest request) {

		int id = getUserIdFromCookie(request);

		List<RentalHistory> list = userService.getRentalsHistory(id);

		return new ResponseEntity<>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/users/cars/{id}/history")
	public ResponseEntity<List<RentalHistory>> getAllCarHistory(@PathVariable int id, HttpServletRequest request) {

		int userId = getUserIdFromCookie(request);

		List<RentalHistory> list = userService.getCarHistory(id,userId);

		return new ResponseEntity<>(list, new HttpHeaders(), HttpStatus.OK);
	}
	private int getUserIdFromCookie(HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if (cookie.getName().equals("auth_by_cookie")) {
					String cookieValue = cookie.getValue();
					String[] parts = cookieValue.split("&");
					return Integer.parseInt(parts[0]);
				}
			}
		}
		return 0;
	}

}
