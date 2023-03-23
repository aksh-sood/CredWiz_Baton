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
        wallet.setPhoneNumber(1234);
        wallet.setAadhaarNumber(1234);
        wallet.setPanNumber("A1234");
        wallet.setBankName("SBI");
        wallet.setAccountNumber(1234);
        wallet.setAmount(100.0);

        when(walletService.addWallet(any())).thenReturn(wallet);

        mockMvc.perform(post("/wallet")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"phoneNumber\":1234}")
                        .content("{\"aadhaarNumber\":1234}")
                        .content("{\"panNumber\":\"1234\"}")
                        .content("{\"bankName\":\"SBI\"}")
                        .content("{\"accountNumber\":1234}")
                        .content("{\"amount\": 100.0}"))
                .andExpect(status().isCreated())
                .andExpect(content().string("Wallet created successfully"));
    }

    @Test
    void testGetWalletById() throws Exception {
        Wallet wallet = new Wallet();
        wallet.setPhoneNumber(1234);
        wallet.setAadhaarNumber(1234);
        wallet.setPanNumber("A1234");
        wallet.setBankName("SBI");
        wallet.setAccountNumber(1234);
        wallet.setAmount(100.0);

        when(walletService.getWalletByPhoneNumber(1234)).thenReturn(wallet);

        mockMvc.perform(get("/wallet/1234"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.phoneNumber").value(1234))
                .andExpect(jsonPath("$.aadhaarNumber").value(1234))
                .andExpect(jsonPath("$.panNumber").value("A1234"))
                .andExpect(jsonPath("$.bankName").value("SBI"))
                .andExpect(jsonPath("$.accountNumber").value(1234))
                .andExpect(jsonPath("$.amount").value(100.0));
    }

    @Test
    void testGetWalletByIdNotFound() throws Exception {
        when(walletService.getWalletByPhoneNumber(1234)).thenReturn(null);

        mockMvc.perform(get("/wallet/1234"))
                .andExpect(status().isNoContent())
                .andExpect(content().string("No wallet"));
    }
}
