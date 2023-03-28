package com.stackroute.userservice.payload;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "build")
@Builder
public class UserDto {


  private String contactNumber;
  private String emailId;


  private String password;
  private String userName;

  private String address;

}