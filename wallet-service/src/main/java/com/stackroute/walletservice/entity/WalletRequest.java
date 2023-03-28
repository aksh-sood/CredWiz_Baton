package com.stackroute.walletservice.entity;

import lombok.Getter;
import lombok.Setter;

public class WalletRequest {
    @Getter @Setter
    private String contactNumber;
    @Getter @Setter
    private Double amount;

}
