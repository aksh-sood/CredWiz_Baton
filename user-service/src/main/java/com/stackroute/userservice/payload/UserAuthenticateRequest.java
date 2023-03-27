package com.stackroute.userservice.payload;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserAuthenticateRequest {

    @NotEmpty(message = "Contact number cannot be null or empty")
    @NotBlank(message = "Contact number cannot be null or empty")
    @Pattern(regexp = "^(\\+91[\\-\\s]?)?[0]?(91)?[789]\\d{9}$",message="phone number does not match the constraints")
    private String contactNumber;

    @NotEmpty(message = "Password cannot be null or empty")
    @NotBlank(message = "Password cannot be null or empty")
    @Pattern(regexp = "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$",message="password does not match the constraints")
    private String password;


}
