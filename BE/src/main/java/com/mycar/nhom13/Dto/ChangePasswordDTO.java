package com.mycar.nhom13.Dto;

import jakarta.validation.constraints.Size;

public class ChangePasswordDTO {
	private String currentPassword;
	@Size(min = 6, message = "Mật khẩu phải có ít nhất 6 ký tự.")
	private String newPassword;

	public ChangePasswordDTO() {

	}

	public ChangePasswordDTO(String currentPassword, String newPassword) {
		this.currentPassword = currentPassword;
		this.newPassword = newPassword;
	}

	public String getCurrentPassword() {
		return currentPassword;
	}

	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
}
