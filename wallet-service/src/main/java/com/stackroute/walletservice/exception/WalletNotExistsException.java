package com.stackroute.walletservice.exception;

public class WalletNotExistsException extends Exception{
    public WalletNotExistsException(String message){
        super(message);
    }
}
