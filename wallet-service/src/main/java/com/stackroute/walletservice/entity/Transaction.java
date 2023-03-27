package com.stackroute.walletservice.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;
    @NotNull
    @Column(length=15)
    @Getter
    @Setter
    private long contactNumber;

    @NotNull
    @Column
    @Getter
    @Setter
    private Date date;

    @NotEmpty
    @Column(length = 30)
    @Getter @Setter
    private String transactionType;

    @NotEmpty
    @Column(length = 12)
    @Getter @Setter
    private String transactionStatus;

    @Column(length = 30)
    @Getter @Setter
    private String remarks;

    @Column(length = 20)
    @Getter @Setter
    private String receiverName;

    @NotNull
    @Column
    @Getter @Setter
    private Long amount;

    @ManyToOne
    @JoinColumn(name = "wallet_contact_number", referencedColumnName = "contactNumber")
    private Wallet wallet;
}
