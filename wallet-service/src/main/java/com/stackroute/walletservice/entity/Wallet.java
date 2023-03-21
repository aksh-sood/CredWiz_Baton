package com.stackroute.walletservice.entity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "wallets")
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long walletId;
    @NotEmpty(message="Name should not be empty")
    @Column(length = 30)
    private String userName; 
     @NotEmpty(message="Phone number should not be empty")
     @Column(length = 15)
    private String phoneNumber;
     @NotEmpty(message="Aadhaar number should not be empty")
     @Column(length = 12)
    private String aadhaarNumber;
    private Double amount;
}
