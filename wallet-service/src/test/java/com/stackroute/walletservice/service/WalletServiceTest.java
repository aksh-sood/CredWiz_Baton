//package com.stackroute.walletservice.service;
//
//import com.stackroute.walletservice.entity.Wallet;
//import com.stackroute.walletservice.repository.WalletRepository;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.when;
//
//public class WalletServiceTest {
//
//    private WalletService walletService;
//
//    @Mock
//    private WalletRepository walletRepository;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.openMocks(this);
//        walletService = new WalletService(walletRepository);
//    }
//
//    @Test
//    void testAddWallet() {
//        Wallet wallet = new Wallet();
//        wallet.setWalletId(1L);
//        wallet.setUserName("John");
//        wallet.setPhoneNumber("945678");
//        wallet.setAadhaarNumber("94545f678");
//        wallet.setAmount(100.0);
//
//        when(walletRepository.save(any(Wallet.class))).thenReturn(wallet);
//
//        Wallet addedWallet = walletService.addWallet(wallet);
//
//        assertEquals(wallet, addedWallet);
//    }
//
//    @Test
//    void testGetWalletById() {
//        Wallet wallet = new Wallet();
//        wallet.setWalletId(1L);
//        wallet.setUserName("John");
//        wallet.setPhoneNumber("945678");
//        wallet.setAadhaarNumber("94545f678");
//        wallet.setAmount(100.0);
//
//        when(walletRepository.findById(1L)).thenReturn(Optional.of(wallet));
//
//        Wallet retrievedWallet = walletService.getWallet(1L);
//
//        assertEquals(wallet, retrievedWallet);
//    }
//
//    @Test
//    void testGetWalletByIdNotFound() {
//        when(walletRepository.findById(1L)).thenReturn(Optional.empty());
//
//        Wallet retrievedWallet = walletService.getWallet(1L);
//
//        assertEquals(null, retrievedWallet);
//    }
//}
