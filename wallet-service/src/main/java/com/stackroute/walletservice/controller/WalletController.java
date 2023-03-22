package com.stackroute.walletservice.controller;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.service.WalletService;

@RestController
public class WalletController {
	@Autowired
	private WalletService walletService;

	@PostMapping("/wallet")
	public ResponseEntity<?> createWallet(@RequestBody Wallet wallet) {
		walletService.addWallet(wallet);
		ResponseEntity<?> entity = new ResponseEntity<String>("Wallet created successfully", HttpStatus.CREATED);
		return entity;
	}
	@GetMapping("/wallet/{walletId}")
	public ResponseEntity<?> getWalletById(@PathVariable("walletId") Long id) {
		ResponseEntity<?> entity = null;
		Wallet wallet = walletService.getWallet(id);
		if (wallet == null) {
			entity = new ResponseEntity<String>("No wallet", HttpStatus.NO_CONTENT);
		} else {
			entity = new ResponseEntity<Wallet>(wallet, HttpStatus.OK);
		}
		return entity;
	}
	
	
}

