package com.mycar.nhom13.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNAUTHORIZED)
public class UnAuthenticated extends RuntimeException {
	public UnAuthenticated(String message) {
		super(message);
	}
}
