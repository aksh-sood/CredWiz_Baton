package com.stackroute.userservice.payload;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "build")
@Builder
public class UserDto {


  @NotEmpty(message = "Email cannot be null or empty")
  @Email(message = "Invalid email id")
  private String emailId;

  @NotEmpty(message = "Password cannot be null or empty")
  @Pattern(regexp = "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$",message="password does not match the constraints")
  private String password;

  @NotEmpty(message = "Name is required")
  private String userName;



  @NotEmpty(message = "Address cannot be null or empty")
  private String address;

}