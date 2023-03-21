package com.stackroute.walletservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
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
    private String userName; 
     @NotEmpty(message="Phone number should not be empty")
    private String phoneNumber;
     @NotEmpty(message="Aadhaar number should not be empty")
    private String aadhaarNumber;
    private Double amount;
}
