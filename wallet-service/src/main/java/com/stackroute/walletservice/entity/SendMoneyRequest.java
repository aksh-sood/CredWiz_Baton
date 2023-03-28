package com.stackroute.walletservice.entity;

import lombok.Getter;
import lombok.Setter;

public class SendMoneyRequest {
    @Getter @Setter
    private String senderContactNumber;
    @Getter @Setter
    private String receiverContactNumber;
    @Getter @Setter
    private Double amount;

}
