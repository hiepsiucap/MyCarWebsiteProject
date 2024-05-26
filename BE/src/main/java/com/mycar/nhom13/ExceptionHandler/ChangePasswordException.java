package com.mycar.nhom13.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class ChangePasswordException extends RuntimeException {

	public ChangePasswordException(String message) {
		super(message);
	}
}
