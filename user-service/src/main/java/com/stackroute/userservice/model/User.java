package com.stackroute.userservice.model;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
	@Id
//	@NotEmpty(message = "Contact number cannot be null or empty")
//	@NotBlank(message = "Contact number cannot be null or empty")
//	@Pattern(regexp = "^(\\+91[\\-\\s]?)?[0]?(91)?[789]\\d{9}$",message="phone number does not match the constraints")
	private long contactNumber;

	@Column(name = "email_id", length = 40)
	@NotEmpty(message = "Email Id Required")
	@NotBlank(message="Email Id Required")
	@Email(message = "Invalid email id")
	private String emailId;

	@Column(length = 30)
	@NotEmpty(message = "Password cannot be null or empty")
	@NotBlank(message = "Password cannot be null or empty")
	@Pattern(regexp = "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$",message="password does not match the constraints")
	private String password;

	@Column(name = "user_name", length = 30)
	@NotEmpty(message = "Name is required")
	@NotBlank(message = "Name is required")
	private String userName;

	@Column(name="address")
	@NotEmpty(message = "Address cannot be null or empty")
	@NotBlank(message = "Address cannot be null or empty")
	private String address;
	

}
