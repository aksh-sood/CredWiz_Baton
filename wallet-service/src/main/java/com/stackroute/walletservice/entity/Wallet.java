package com.stackroute.walletservice.entity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "wallets")
public class Wallet {
    @Id
    @Getter @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long walletId;
    @NotEmpty(message="Name should not be empty")
    @Column(length = 30)
    @Getter @Setter
    private String userName; 
     @NotEmpty(message="Phone number should not be empty")
     @Column(length = 15)
     @Getter @Setter
    private String phoneNumber;
     @NotEmpty(message="Aadhaar number should not be empty")
     @Column(length = 12)
     @Getter @Setter
    private String aadhaarNumber;
    @Getter @Setter
     private Double amount=0.0;
}
