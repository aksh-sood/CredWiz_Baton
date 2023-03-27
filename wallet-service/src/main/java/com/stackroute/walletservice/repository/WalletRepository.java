package com.stackroute.walletservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.stackroute.walletservice.entity.Wallet;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface WalletRepository extends JpaRepository<Wallet, String> {
	
}
