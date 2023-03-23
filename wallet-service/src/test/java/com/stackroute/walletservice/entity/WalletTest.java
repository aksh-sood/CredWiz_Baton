package com.stackroute.walletservice.entity;
import static org.junit.jupiter.api.Assertions.assertTrue;


import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
public class WalletTest {
//    @Test
//    public void testWalletConstructor() {
//        Wallet wallet = new Wallet(null, "test", "1234567890", "123456789012", 0.0);
//        assertEquals("test", wallet.getUserName());
//        assertEquals("1234567890", wallet.getPhoneNumber());
//        assertEquals("123456789012", wallet.getAadhaarNumber());
//        assertEquals(0.0, wallet.getAmount());
//    }
    private static Wallet wallet;

    @BeforeAll
    public static void setUp() throws  Exception {
        wallet = new Wallet();
        wallet.setUserName("test");
        wallet.setPhoneNumber("45678899");
        wallet.setAadhaarNumber("4567776");
    }

    @Test
    public void testUserNameShouldNotBeEmpty() {
        assertTrue(wallet.getUserName().equalsIgnoreCase("test"),"User name not empty");

    }
    @Test
    public void testPhoneNumberShouldNotBeEmpty() {
        assertTrue(wallet.getPhoneNumber().equalsIgnoreCase("45678899"),"Phone number not empty");
    }
    @Test
    public void testAadhaarNumberShouldNotBeEmpty() {
        assertTrue(wallet.getAadhaarNumber().equalsIgnoreCase("4567776"),"Aadhaar number not empty");
    }

}
