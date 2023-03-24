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
	public Wallet getWalletByPhoneNumber(long id) {
		Optional<Wallet> optionalWallet=walletRepository.findById(id);
		Wallet wallet=optionalWallet.isEmpty()?null:optionalWallet.get();
		return wallet;
	}



	public Wallet withdrawMoney(long phoneNumber, Double amount){
		Wallet wallet = getWalletByPhoneNumber(phoneNumber);
		if (wallet == null || wallet.getAmount() < amount) {
			return null;
		}
		wallet.setAmount(wallet.getAmount() - amount);
		walletRepository.save(wallet);
		return wallet;
	}


	public Wallet addMoney(long phoneNumber, Double amount) {
		Wallet wallet = getWalletByPhoneNumber(phoneNumber);
		if (wallet == null) {
			return null;
		}
		wallet.setAmount(wallet.getAmount() + amount);
		walletRepository.save(wallet);
		return wallet;
	}

	public boolean sendMoney(long senderPhoneNumber, long receiverPhoneNumber, Double amount) throws InsufficientBalanceException {
		Wallet senderWallet = getWalletByPhoneNumber(senderPhoneNumber);
		Wallet receiverWallet = getWalletByPhoneNumber(receiverPhoneNumber);

		if (senderWallet == null || receiverWallet == null) {
			return false;
		}

		if (senderWallet.getAmount() < amount) {
			throw new InsufficientBalanceException("Sender does not have sufficient balance");
		}

		senderWallet.setAmount(senderWallet.getAmount() - amount);
		receiverWallet.setAmount(receiverWallet.getAmount() + amount);

		walletRepository.save(senderWallet);
		walletRepository.save(receiverWallet);

		return true;
	}

}



