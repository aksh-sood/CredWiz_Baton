package com.stackroute.userservice.controller;

import com.stackroute.userservice.exceptions.ContactNumberAlreadyExistsException;
import com.stackroute.userservice.exceptions.ContactNumberNotExistException;
import com.stackroute.userservice.exceptions.EmailIdNotExistException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

	@Autowired
	private UserService userService;


	@GetMapping("/users")
	public ResponseEntity<?> getAllUser() {
		List<User> userList = userService.getAllUser();
		Map<String,Object>map=new HashMap<String,Object>();
		map.put("count",userList.size());
		map.put("list",userList);
		ResponseEntity<?> entity = new ResponseEntity<Map>(map, HttpStatus.OK);
		return entity;
	}

	@PostMapping("/users")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		ResponseEntity<?> entity = null;
		try {
			userService.saveUser(user);
			entity = new ResponseEntity<String>("User Registered Successfully...", HttpStatus.CREATED);
		} catch (ContactNumberAlreadyExistsException e) {
			entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		return entity;
	}

	@GetMapping("/users/{email}")
	public ResponseEntity<?> getUserByEmailId(@PathVariable("email") String emailId) {
		ResponseEntity<?> entity = null;
		User user = null;
		try {
			user = userService.getUserByEmail(emailId);
		} catch (EmailIdNotExistException e) {
			entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.NO_CONTENT);
		}
		return entity;
	}

	@DeleteMapping("/users/{contactNumber}")
	public ResponseEntity<?> deleteUserByContactNumber(@PathVariable("contactNumber") long contactNumber)
			throws ContactNumberNotExistException {
		boolean isDeleted = userService.deleteUserByContactNumber(contactNumber);
		ResponseEntity<?> entity = new ResponseEntity<String>("User Deleted Successfully", HttpStatus.OK);
		return entity;
	}

	@PostMapping("/login")
	public ResponseEntity<?> validateUser(@RequestBody User user) {
		boolean isValid = userService.validateUser(user);

		Map<String, Object> map=new HashMap<String,Object>();
		map.put("message","Invalid Credentials");
		ResponseEntity<?> entity = new ResponseEntity<Map>(map, HttpStatus.BAD_REQUEST);
		if (isValid) {

			String token = getToken(user.getContactNumber());

			map.put("message","Login Successful");
			map.put("token",token);

			entity = new ResponseEntity<Map>(map, HttpStatus.OK);
		}
		return entity;
	}

	private String getToken(long contactNumber) {
		long expiryTime = System.currentTimeMillis() + (1000 * 60 * 5);
		String token = Jwts.builder().setSubject(String.valueOf(contactNumber)).setIssuedAt(new Date()).setExpiration(new Date(expiryTime))
				.signWith(SignatureAlgorithm.HS256, "success").compact();

		return token;
	}

	@GetMapping("/users/mobile/{contactNumber}")
	public ResponseEntity<?> getUserByMobileNumber(@PathVariable("contactNumber") long contactNumber) {
		User user = null;
		ResponseEntity<?> entity = null;

		try {
			user= userService.getUserByContactNumber(contactNumber);
		} catch (ContactNumberNotExistException e) {
			entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.NO_CONTENT);
		}
		 entity = new ResponseEntity<User>(user, HttpStatus.OK);
		return entity;
	}

	@ExceptionHandler(EmailIdNotExistException.class)
	public ResponseEntity<?> noEmailIdHandlerException(Exception e) {
		ResponseEntity<?> entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		return entity;
	}

	@ExceptionHandler(ContactNumberNotExistException.class)
	public ResponseEntity<?> noContactNumberExceptionHandler(Exception e) {
		ResponseEntity<?> entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		return entity;
	}





}
