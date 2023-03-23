package com.stackroute.walletservice.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
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

    @NotEmpty()
    @Column(length = 12)
    @Getter
    @Setter
    private Date date;

    @NotEmpty()
    @Column(length = 6)
    @Getter @Setter
    private String transactionType;

    @NotEmpty()
    @Column(length = 12)
    @Getter @Setter
    private String transactionStatus;

    @Column(length = 30)
    @Getter @Setter
    private String remarks;

}
