package com.mycar.nhom13.Dto;

public class LoginDTO {
	public LoginDTO(String username, String password) {
		this.email = username;
		this.password = password;
	}

	public LoginDTO() {
	};

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	private String email;
	private String password;

}
