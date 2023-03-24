package com.stackroute.walletservice.entity;

import lombok.Getter;
import lombok.Setter;

public class SendMoneyRequest {
    @Getter @Setter
    private Long senderContactNumber;
    @Getter @Setter
    private Long receiverContactNumber;
    @Getter @Setter
    private Double amount;

}
