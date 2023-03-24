package com.stackroute.walletservice.service;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.exception.InSufficientBalanceException;

public interface WalletServiceInterface {
    Wallet addWallet(Wallet wallet);
    Wallet getWalletByPhoneNumber(long id);



    Wallet withdrawMoney(long phoneNumber, Double amount);

    Wallet addMoney(long phoneNumber, Double amount);
    boolean sendMoney(long senderPhoneNumber, long receiverPhoneNumber, Double amount) throws InSufficientBalanceException;
}

