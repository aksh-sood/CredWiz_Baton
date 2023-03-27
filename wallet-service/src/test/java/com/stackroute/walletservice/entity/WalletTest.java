package com.stackroute.walletservice.entity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class WalletTest {

    @Test
    public void testWalletClass() {
        Wallet wallet = new Wallet();
        assertNotNull(wallet);
        wallet.setContactNumber("1234567890");
        wallet.setAadhaarNumber("123456789012");
        wallet.setPanNumber("ABCDE1234F");
        wallet.setBankName("HDFC");
        wallet.setAccountNumber("123456789012");
        wallet.setBalance(100.0);
//        assertNull(wallet.getTransactions());
    }

    @Test
    public void testWalletValidation() {
        Wallet wallet = new Wallet();
        wallet.setContactNumber("1234567890");
        wallet.setAadhaarNumber("0");
        wallet.setPanNumber("");
        wallet.setBankName("");
        wallet.setAccountNumber("0");
        wallet.setBalance(-1.0);
        assertNotNull(wallet.getContactNumber());
        assertNotNull(wallet.getAadhaarNumber());
        assertNotNull(wallet.getPanNumber());
        assertNotNull(wallet.getBankName());
        assertNotNull(wallet.getAccountNumber());
        assertNotNull(wallet.getBalance());
    }

}
