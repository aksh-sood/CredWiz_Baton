package com.stackroute.userservice.model;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
	@Id
//	@Setter(AccessLevel.PROTECTED)
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private long userId;
	@NotEmpty(message = "Contact number cannot be null or empty")
	@Pattern(regexp = "^(\\+91[\\-\\s]?)?[0]?(91)?[789]\\d{9}$",message="phone number does not match the constraints")
	private long contactNumber;
	@Column(name = "email_id", length = 40)
	@NotEmpty(message = "Email cannot be null or empty")
	@Email(message = "Invalid email id")
	private String emailId;
	@Column(length = 30)
	@NotEmpty(message = "Password cannot be null or empty")
	@Pattern(regexp = "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$",message="password does not match the constraints")
	private String password;
	@Column(name = "first_name", length = 30)
	@NotEmpty(message = "Name is required")
	private String firstName;

	@Column(name = "last_name", length = 30)
	@NotEmpty(message = "Name is required")
	private String lastName;
	@Column(name="address")
	@NotEmpty(message = "Address cannot be null or empty")
	private String address;

	@Column(name="aadhar_no")
	@NotEmpty(message = "Aadhar number cannot be null or empty")
	private String aadharNo;


	
//
//	public String getEmailId() {
//		return emailId;
//	}
//	public void setEmailId(String emailId) {
//		this.emailId = emailId;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public long getMobileNumber() {
//		return mobileNumber;
//	}
//	public void setMobileNumber(long mobileNumber) {
//		this.mobileNumber = mobileNumber;
//	}
	
	

}
