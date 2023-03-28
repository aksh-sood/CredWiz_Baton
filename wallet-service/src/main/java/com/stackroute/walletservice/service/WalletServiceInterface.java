package com.stackroute.walletservice.service;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.exception.InSufficientBalanceException;

public interface WalletServiceInterface {
    Wallet addWallet(Wallet wallet);

    Wallet getWalletByContactNumber(String id);

    Wallet withdrawMoney(String contactNumber, Double amount) throws InSufficientBalanceException;

    Wallet addMoney(String contactNumber, Double amount);

    boolean sendMoney(String senderContactNumber, String receiverContactNumber, Double amount)
            throws InSufficientBalanceException;
}
