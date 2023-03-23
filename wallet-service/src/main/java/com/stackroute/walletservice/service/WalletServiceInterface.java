package com.stackroute.walletservice.service;

import com.stackroute.walletservice.entity.Wallet;

public interface WalletServiceInterface {
    Wallet addWallet(Wallet wallet);
    Wallet getWalletByPhoneNumber(long id);



    Wallet withdrawMoney(long walletId, Double amount);

    Wallet addMoney(long walletId, Double amount);
}

