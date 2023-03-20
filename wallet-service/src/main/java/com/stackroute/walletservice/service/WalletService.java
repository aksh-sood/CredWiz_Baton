package com.learn.usa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.usa.exceptions.EmailIdAlreadyExistException;
import com.learn.usa.exceptions.EmailIdNotExistException;
import com.learn.usa.model.User;
import com.learn.usa.repository.UserRepository;

@Service
public class WalletService {
	@Autowired
	private WalletRepository walletRepository;
	
	public wallet addWallet(Wallet wallet) {
		Wallet addWallet=walletRepository.save(wallet);
		return addWallet;
	}
}



