package com.stackroute.userservice.exceptions;

public class EmailIdAlreadyExistsException extends Exception{
	
	public EmailIdAlreadyExistsException () {
		
	}
	public EmailIdAlreadyExistsException (String message) {
		super(message);
		
	}

}
