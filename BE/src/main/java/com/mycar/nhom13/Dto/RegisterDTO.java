package com.mycar.nhom13.Dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class RegisterDTO {
	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public String getPassword() {
		return password;
	}
	@Size(min = 1, message = "Họ không đươc trống.")
	private String firstName;
	@Size(min = 1, message = "Tên không đươc trống.")
	private String lastName;
	@Email(message = "Email không hợp lệ.")
	private String email;
	@Pattern(regexp = "[0-9]{10}", message = "Số điện thoại không hợp lệ.")
	private String phoneNumber;

	@Size(min = 6, message = "Mật khẩu phải có ít nhất 6 ký tự.")

	private String password;
}
