package com.stackroute.walletservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.repository.WalletRepository;

import java.util.Optional;

@Service
public class WalletService{
	@Autowired
	private WalletRepository walletRepository;
	
	public Wallet addWallet(Wallet wallet) {
		Wallet addWallet=walletRepository.save(wallet);
		return addWallet;
	}
	public Wallet getWalletByPhoneNumber(long id) {
		Optional<Wallet> optionalWallet=walletRepository.findById(id);
		Wallet wallet=optionalWallet.isEmpty()?null:optionalWallet.get();
		return wallet;
	}

	public Wallet addMoney(Long walletId, Double amount){
		Wallet wallet = getWalletByPhoneNumber(walletId);
		if (wallet == null) {
			return null;
		}
		wallet.setAmount(wallet.getAmount() + amount);
		walletRepository.save(wallet);
		return wallet;
	}

	public Wallet withdrawMoney(long walletId, Double amount){
		Wallet wallet = getWalletByPhoneNumber(walletId);
		if (wallet == null || wallet.getAmount() < amount) {
			return null;
		}
		wallet.setAmount(wallet.getAmount() - amount);
		walletRepository.save(wallet);
		return wallet;
	}
}



