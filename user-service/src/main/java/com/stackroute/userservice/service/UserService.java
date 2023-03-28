package com.stackroute.userservice.service;

import com.stackroute.userservice.exceptions.*;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.payload.UserDto;

import javax.validation.ConstraintViolationException;
import java.util.List;

public interface UserService {
	User saveUser(User user) throws ContactNumberAlreadyExistsException;

	List<User> getAllUser();

	boolean deleteUserByContactNumber(String contactNumber) throws ContactNumberNotExistException;

	boolean validateUser(User user);

	User getUserByContactNumber(String contactNumber) throws ContactNumberNotExistException;


	User updateUser(UserDto userDto) throws CustomException, ConstraintViolationException, ContactNumberNotExistException;
}
