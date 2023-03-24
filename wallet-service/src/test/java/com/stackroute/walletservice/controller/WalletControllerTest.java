package com.stackroute.walletservice.controller;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.entity.WalletRequest;
import com.stackroute.walletservice.exception.InSufficientBalanceException;
import com.stackroute.walletservice.exception.WalletNotExistsException;
import com.stackroute.walletservice.service.WalletService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class WalletControllerTest {
    @Mock
    private WalletService walletService;

    @InjectMocks
    private WalletController walletController;

    private Wallet wallet;

    @Before
    public void setUp() {
        wallet = new Wallet();
        wallet.setContactNumber(1234567890L);
        wallet.setBalance(500.0);
    }

    @Test
    public void testCreateWallet() {
        when(walletService.addWallet(wallet)).thenReturn(wallet);
        ResponseEntity<String> responseEntity = walletController.createWallet(wallet);
        assertEquals(responseEntity.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    public void testGetWalletByPhoneNumber() throws WalletNotExistsException {
        when(walletService.getWalletByContactNumber(anyLong())).thenReturn(wallet);
        ResponseEntity<?> responseEntity = walletController.getWalletByContactNumber(1234567890L);
        assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);
        assertEquals(((Wallet) responseEntity.getBody()).getContactNumber(), wallet.getContactNumber());
    }

    @Test
    public void testAddMoneyToWallet() throws WalletNotExistsException {
        WalletRequest request = new WalletRequest();
        request.setContactNumber(1234567890L);
        request.setAmount(500.0);
        when(walletService.getWalletByContactNumber(anyLong())).thenReturn(wallet);
        ResponseEntity<String> responseEntity = walletController.addMoneyToWallet(request);
        assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);
        assertEquals(wallet.getBalance(), 1000.0, 0);
    }

    @Test(expected = WalletNotExistsException.class)
    public void testAddMoneyToWalletThrowsExceptionWhenWalletNotFound() throws WalletNotExistsException {
        WalletRequest request = new WalletRequest();
        request.setContactNumber(1234567890L);
        request.setAmount(500.0);
        when(walletService.getWalletByContactNumber(anyLong())).thenReturn(null);
        walletController.addMoneyToWallet(request);
    }

    @Test
    public void testWithdrawMoney() throws WalletNotExistsException, InSufficientBalanceException {
        WalletRequest request = new WalletRequest();
        request.setContactNumber(1234567890L);
        request.setAmount(200.0);
        when(walletService.getWalletByContactNumber(anyLong())).thenReturn(wallet);
        ResponseEntity<String> responseEntity = walletController.withdrawMoney(request);
        assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);
        assertEquals(wallet.getBalance(), 300.0, 0);
    }

    @Test(expected = WalletNotExistsException.class)
    public void testWithdrawMoneyThrowsExceptionWhenWalletNotFound() throws WalletNotExistsException, InSufficientBalanceException {
        WalletRequest request = new WalletRequest();
        request.setContactNumber(1234567890L);
        request.setAmount(200.0);
        when(walletService.getWalletByContactNumber(anyLong())).thenReturn(null);
        walletController.withdrawMoney(request);
    }
}