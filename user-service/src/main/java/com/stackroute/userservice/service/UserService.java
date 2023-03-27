package com.stackroute.userservice.service;

import com.stackroute.userservice.exceptions.*;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.payload.UserDto;

import javax.validation.ConstraintViolationException;
import java.util.List;

public interface UserService {
	public User saveUser(User user) throws ContactNumberAlreadyExistsException;

	public List<User> getAllUser();

	public User getUserByEmail(String emailId) throws EmailIdNotExistException;

	public boolean deleteUserByContactNumber(String contactNumber) throws ContactNumberNotExistException;

	public boolean validateUser(User user);

	public User getUserByContactNumber(String contactNumber) throws ContactNumberNotExistException;


	public User updateUser(UserDto userDto) throws CustomException, ConstraintViolationException;
}
