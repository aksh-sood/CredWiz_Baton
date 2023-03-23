package com.stackroute.walletservice.controller;
import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.service.WalletService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringJUnitConfig
@WebMvcTest(WalletController.class)
public class WalletControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WalletService walletService;

    @Test
    void testCreateWallet() throws Exception {
        Wallet wallet = new Wallet();
        wallet.setWalletId(12L);
        wallet.setUserName("John");
        wallet.setPhoneNumber("945678");
        wallet.setAadhaarNumber("94545f678");
        wallet.setAmount(100.0);

        when(walletService.addWallet(any())).thenReturn(wallet);

        mockMvc.perform(post("/wallet")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"walletId\":12}")
                        .content("{\"userName\":\"Jhon\"}")
                        .content("{\"phoneNumber\":\"945678\"}")
                        .content("{\"aadhaarNumber\":\"94545f678\"}")
                        .content("{\"amount\": 100.0}"))
                .andExpect(status().isCreated())
                .andExpect(content().string("Wallet created successfully"));
    }

    @Test
    void testGetWalletById() throws Exception {
        Wallet wallet = new Wallet();
        wallet.setWalletId(12L);
        wallet.setUserName("John");
        wallet.setPhoneNumber("945678");
        wallet.setAadhaarNumber("94545f678");
        wallet.setAmount(100.0);

        when(walletService.getWallet(12L)).thenReturn(wallet);

        mockMvc.perform(get("/wallet/12"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.walletId").value(12L))
                .andExpect(jsonPath("$.amount").value(100.0));
    }

    @Test
    void testGetWalletByIdNotFound() throws Exception {
        when(walletService.getWallet(12L)).thenReturn(null);

        mockMvc.perform(get("/wallet/12"))
                .andExpect(status().isNoContent())
                .andExpect(content().string("No wallet"));
    }
}
