package com.stackroute.walletservice.entity;

import lombok.Getter;
import lombok.Setter;

public class WalletRequest {
    @Getter @Setter
    private Long phoneNumber;
    @Getter @Setter
    private Double amount;

}
