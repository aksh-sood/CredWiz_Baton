package com.stackroute.walletservice.service;

import com.stackroute.walletservice.entity.Wallet;

public interface WalletServiceInterface {
    public Wallet addWallet(Wallet wallet);
    public Wallet getWallet(Long id);
}

