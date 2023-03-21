package com.learn.usa.controller;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.learn.usa.exceptions.EmailIdAlreadyExistException;
import com.learn.usa.exceptions.EmailIdNotExistException;
import com.learn.usa.model.User;
import com.learn.usa.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class WalletController {
	@Autowired
	private walletService walletService;



	@PostMapping("/wallet")
	public ResponseEntity<?> registerUser(@RequestBody Wallet wallet) {
		walletService.addWallet(wallet);
		ResponseEntity<?> entity = new ResponseEntity<String>("Wallet created successfully", HttpStatus.CREATED);
		return entity;
	}

	
	
}