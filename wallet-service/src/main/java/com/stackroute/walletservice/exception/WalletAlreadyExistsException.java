package com.stackroute.walletservice.exception;

public class WalletAlreadyExistsException extends Exception{
    public WalletAlreadyExistsException(String message){
        super(message);
    }
}
