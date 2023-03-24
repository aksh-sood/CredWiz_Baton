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
   @Column(length = 15)
   private long contactNumber;
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long walletId;

    @NotEmpty(message="Aadhaar number should not be empty")
    @Column(length = 12)
    @Getter @Setter
    private long aadhaarNumber;

    @NotEmpty(message="PAN number should not be empty")
    @Column(length = 12)
    @Getter @Setter
    private String panNumber;

   @NotEmpty(message="Bank Name should not be empty")
   @Column(length = 12)
   @Getter @Setter
   private String bankName;

    @NotEmpty(message="Account number should not be empty")
    @Column(length = 12)
    @Getter @Setter
    private long accountNumber;

    @Getter @Setter
    private Double balance=0.0;

//    private List<Transaction> transactions;
}
