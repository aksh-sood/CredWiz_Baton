package com.stackroute.walletservice.entity;

public class SendMoneyRequest {
    private Long senderPhoneNumber;
    private Long receiverPhoneNumber;
    private Double amount;

    public Long getSenderPhoneNumber() {
        return senderPhoneNumber;
    }

    public void setSenderPhoneNumber(Long senderPhoneNumber) {
        this.senderPhoneNumber = senderPhoneNumber;
    }

    public Long getReceiverPhoneNumber() {
        return receiverPhoneNumber;
    }

    public void setReceiverPhoneNumber(Long receiverPhoneNumber) {
        this.receiverPhoneNumber = receiverPhoneNumber;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
