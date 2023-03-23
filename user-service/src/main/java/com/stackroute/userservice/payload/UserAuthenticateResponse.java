package com.stackroute.userservice.payload;

public class UserAuthenticateResponse {
    private String jwt;

    public UserAuthenticateResponse(String jwt){
        this.jwt=jwt;
    }
    public String getJwt(){
        return jwt;
    }
}
