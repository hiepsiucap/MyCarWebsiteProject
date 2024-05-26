package com.mycar.nhom13.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class RentalException extends RuntimeException {
	public RentalException(String message) {
		super(message);
	}

}
