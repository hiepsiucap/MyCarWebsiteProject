package com.mycar.nhom13.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class ReviewException extends RuntimeException {
	public ReviewException(String message) {
		super(message);
	}
}
