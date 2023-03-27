package com.stackroute.walletservice.entity;

import javax.persistence.*;
import javax.validation.constraints.*;


import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "wallets")
public class Wallet {
   @Id
   @NotEmpty(message = "Contact number should not be empty")
   @Pattern(regexp="^[0-9]{10}$", message="Contact number should be of 10 digits")
   @Column(length = 10, unique = true)
   private String contactNumber;

    @NotEmpty(message="Aadhaar number should not be empty")
    @Pattern(regexp="^[0-9]{12}$", message="Aadhaar number should be of 12 digits")
    @Column(length = 12, unique = true)
    private String  aadhaarNumber;

    @NotEmpty(message="PAN number should not be empty")
    @Column(length = 12,unique = true)
    private String panNumber;

    @NotBlank(message = "Bank name cannot be blank")
    @Pattern(regexp = "[a-zA-Z]+", message = "Bank name can only contain alphabets")
   private String bankName;

    @NotNull(message = "Account number cannot be blank")
    @Pattern(regexp = "[0-9]+", message = "Account number can only contain digits")
    private String  accountNumber;
    @DecimalMin(value = "0.0", message = "Balance should be non-negative")
    private Double balance=0.0;

    @OneToMany(mappedBy = "wallet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Transaction> transactions;


}
