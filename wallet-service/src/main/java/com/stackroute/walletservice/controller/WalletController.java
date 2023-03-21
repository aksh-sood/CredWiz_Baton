package com.stackroute.walletservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.service.WalletService;

@RestController
public class WalletController {
	@Autowired
	private WalletService walletService;



	@PostMapping("/wallet")
	public ResponseEntity<?> registerUser(@RequestBody Wallet wallet) {
		walletService.addWallet(wallet);
		ResponseEntity<?> entity = new ResponseEntity<String>("Wallet created successfully", HttpStatus.CREATED);
		return entity;
	}

	
	
}

