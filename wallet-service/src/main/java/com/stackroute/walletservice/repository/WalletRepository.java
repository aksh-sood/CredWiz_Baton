package com.stackroute.walletservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.stackroute.walletservice.entity.Wallet;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
	
}
