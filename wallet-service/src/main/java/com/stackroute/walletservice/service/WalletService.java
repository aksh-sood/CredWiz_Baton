package com.stackroute.walletservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.repository.WalletRepository;

import java.util.Optional;

@Service
public class WalletService implements WalletServiceInterface{
	@Autowired
	private WalletRepository walletRepository;
	
	public Wallet addWallet(Wallet wallet) {
		Wallet addWallet=walletRepository.save(wallet);
		return addWallet;
	}
	public Wallet getWallet(Long id) {
		Optional<Wallet> optionalWallet=walletRepository.findById(id);
		Wallet wallet=optionalWallet.isEmpty()?null:optionalWallet.get();
		return wallet;
	}
}



