//package com.stackroute.walletservice.service;
//import static org.junit.jupiter.api.Assertions.*;
//import java.math.BigDecimal;
//import java.util.Optional;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.mockito.MockitoAnnotations;
//import org.mockito.stubbing.OngoingStubbing;
//
//import com.stackroute.walletservice.entity.Wallet;
//import com.stackroute.walletservice.repository.WalletRepository;
//
//class WalletServiceTest {
//
//    @InjectMocks
//    WalletService walletService;
//
//    @Mock
//    WalletRepository walletRepository;
//
//    @BeforeEach
//    void setUp() throws Exception {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testAddWallet() {
//        Wallet wallet = new Wallet();
//        wallet.setWalletId(12L);
//        wallet.setUserName("test");
//        wallet.setPhoneNumber("45678899");
//        wallet.setAadhaarNumber("4567776");
//        wallet.setAmount(100.0);
//
//        OngoingStubbing<Wallet> stub = Mockito.when(walletRepository.save(wallet));
//        stub.thenReturn(wallet);
//
//        Wallet result = walletService.addWallet(wallet);
//        assertNotNull(result);
//        assertEquals(BigDecimal.valueOf(1000), result.getAmount());
//        assertEquals(12, result.getWalletId());
//    }
//
//    @Test
//    void testGetWallet() {
//        Wallet wallet = new Wallet();
//        wallet.setWalletId(12L);
//        wallet.setUserName("test");
//        wallet.setPhoneNumber("45678899");
//        wallet.setAadhaarNumber("4567776");
//        wallet.setAmount(100.0);
//
//        OngoingStubbing<Optional<Wallet>> stub = Mockito.when(walletRepository.findById(12L));
//        stub.thenReturn(Optional.of(wallet));
//
//        Wallet result = walletService.getWallet(1L);
//        assertNotNull(result);
//        assertEquals(100.0, result.getAmount());
//        assertEquals(12, result.getWalletId());
//    }
//}
