package com.stackroute.walletservice.service;

import com.stackroute.walletservice.entity.Transaction;
import com.stackroute.walletservice.exception.InSufficientBalanceException;
import com.stackroute.walletservice.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.repository.WalletRepository;

import java.util.Date;
import java.util.Optional;

@Service
public class WalletService implements WalletServiceInterface {
	@Autowired
	private WalletRepository walletRepository;

	@Autowired
	private TransactionRepository transactionRepository;


	public Wallet addWallet(Wallet wallet) {
		Wallet addWallet = walletRepository.save(wallet);
		return addWallet;
	}

	public Wallet getWalletByContactNumber(String id) {
		Optional<Wallet> optionalWallet = walletRepository.findById(id);
		Wallet wallet = optionalWallet.isEmpty() ? null : optionalWallet.get();
		return wallet;
	}

	public Wallet withdrawMoney(String phoneNumber, Double amount) throws InSufficientBalanceException {
		Wallet wallet = getWalletByContactNumber(phoneNumber);
		if (wallet == null) {
			return null;
		}
		if (wallet.getBalance() < amount) {
			throw new InSufficientBalanceException("Insufficient balance in wallet with phone number: " + phoneNumber);
		}
		wallet.setBalance(wallet.getBalance() - amount);
		walletRepository.save(wallet);
		return wallet;
	}

	public Wallet addMoney(String phoneNumber, Double amount) {
		Wallet wallet = getWalletByContactNumber(phoneNumber);
		if (wallet == null) {
			return null;
		}
		wallet.setBalance(wallet.getBalance() + amount);
		walletRepository.save(wallet);
		return wallet;
	}

	public boolean sendMoney(String senderPhoneNumber, String receiverPhoneNumber, Double amount) throws InSufficientBalanceException {
		Wallet senderWallet = getWalletByContactNumber(senderPhoneNumber);
		Wallet receiverWallet = getWalletByContactNumber(receiverPhoneNumber);

		if (senderWallet == null || receiverWallet == null) {
			return false;
		}

		if (senderWallet.getBalance() < amount) {
			throw new InSufficientBalanceException("Sender does not have sufficient balance");
		}

		senderWallet.setBalance(senderWallet.getBalance() - amount);
		receiverWallet.setBalance(receiverWallet.getBalance() + amount);

		walletRepository.save(senderWallet);
		walletRepository.save(receiverWallet);

		return true;
	}

	public void saveTransaction(String contactNumber, String transactionType, String transactionStatus, String remarks, String receiverName, Long amount) {
		Transaction transaction = new Transaction();
		transaction.setContactNumber(contactNumber);
		transaction.setTransactionType(transactionType);
		transaction.setTransactionStatus(transactionStatus);
		transaction.setRemarks(remarks);
		transaction.setReceiverName(receiverName);
		transaction.setAmount(amount);
		transaction.setDate(new Date());
		transactionRepository.save(transaction);
	}

}
