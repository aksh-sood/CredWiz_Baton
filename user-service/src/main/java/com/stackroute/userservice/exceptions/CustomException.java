package com.stackroute.userservice.exceptions;

public class CustomException extends Exception{
    public CustomException(){}
    public CustomException(String message){
        super(message);
    }
}
