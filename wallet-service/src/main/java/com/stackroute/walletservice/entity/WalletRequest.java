package com.stackroute.walletservice.entity;

import lombok.Getter;
import lombok.Setter;

public class WalletRequest {
    @Getter @Setter
    private Long contactNumber;
    @Getter @Setter
    private Double amount;

}
