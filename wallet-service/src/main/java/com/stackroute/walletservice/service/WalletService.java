package com.stackroute.walletservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.repository.WalletRepository;

@Service
public class WalletService {
	@Autowired
	private WalletRepository walletRepository;
	
	public Wallet addWallet(Wallet wallet) {
		Wallet addWallet=walletRepository.save(wallet);
		return addWallet;
	}
}



