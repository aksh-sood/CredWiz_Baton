package com.stackroute.userservice.service;

import com.stackroute.userservice.exceptions.ContactNumberAlreadyExistsException;
import com.stackroute.userservice.exceptions.ContactNumberNotExistException;
import com.stackroute.userservice.exceptions.EmailIdAlreadyExistsException;
import com.stackroute.userservice.exceptions.EmailIdNotExistException;
import com.stackroute.userservice.model.User;

import java.util.List;

public interface UserService {
	public User saveUser(User user) throws ContactNumberAlreadyExistsException;

	public List<User> getAllUser();

	public User getUserByEmail(String emailId) throws EmailIdNotExistException;

	public boolean deleteUserByContactNumber(long contactNumber) throws ContactNumberNotExistException;

	public boolean validateUser(User user);

	public User getUserByContactNumber(long contactNumber) throws ContactNumberNotExistException;


}
