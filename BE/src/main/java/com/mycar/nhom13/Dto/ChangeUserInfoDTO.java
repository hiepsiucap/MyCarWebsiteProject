package com.mycar.nhom13.Dto;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class ChangeUserInfoDTO {
	@Size(min = 1, message = "Tên không đươợc trống")
	private String lastName;
	@Size(min = 1, message = "Họ không đươợc trống")
	private String firstName;

	@Pattern(regexp = "[0-9]{10}", message = "Số điện thoại không hợp lệ.")
	private String phoneNumber;

	public ChangeUserInfoDTO() {

	}

	public ChangeUserInfoDTO(String lastName, String firstName,
			@Pattern(regexp = "[0-9]{10}", message = "Số điện thoại không hợp lệ.") String phoneNumber) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.phoneNumber = phoneNumber;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
