package com.stackroute.userservice.exceptions;

public class ContactNumberNotExistException extends Exception{
    public ContactNumberNotExistException(){}
    public ContactNumberNotExistException(String message){
        super(message);
    }
}
