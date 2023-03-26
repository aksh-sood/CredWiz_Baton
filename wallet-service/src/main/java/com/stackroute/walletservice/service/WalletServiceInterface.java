package com.stackroute.walletservice.service;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.exception.InSufficientBalanceException;

public interface WalletServiceInterface {
    Wallet addWallet(Wallet wallet);

    Wallet getWalletByContactNumber(long id);

    Wallet withdrawMoney(long contactNumber, Double amount);

    Wallet addMoney(long contactNumber, Double amount);

    boolean sendMoney(long senderContactNumber, long receiverContactNumber, Double amount)
            throws InSufficientBalanceException;
}
