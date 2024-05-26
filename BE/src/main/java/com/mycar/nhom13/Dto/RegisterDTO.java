package com.mycar.nhom13.Dto;

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

	private String firstName;

	private String lastName;

	private String email;

	private String phoneNumber;

	@Size(min = 6, message = "Mật khẩu phải có ít nhất 6 ký tự.")

	private String password;
}
