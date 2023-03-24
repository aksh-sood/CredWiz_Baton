package com.stackroute.walletservice.controller;

import com.stackroute.walletservice.entity.SendMoneyRequest;
import com.stackroute.walletservice.entity.WalletRequest;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.service.WalletService;

@RestController
public class WalletController {
    @Autowired
    private WalletService walletService;

    @PostMapping("/wallet")
    public ResponseEntity<?> createWallet(@RequestBody Wallet wallet) {

        walletService.addWallet(wallet);
        ResponseEntity<?> entity = new ResponseEntity<String>("Wallet created successfully", HttpStatus.CREATED);
        return entity;
    }

    @GetMapping("/wallet/{phoneNumber}")
    public ResponseEntity<?> getWalletByPhoneNumber(@PathVariable("phoneNumber") long id) {
        ResponseEntity<?> entity = null;
        Wallet wallet = walletService.getWalletByPhoneNumber(id);
        if (wallet == null) {
            entity = new ResponseEntity<String>("No wallet", HttpStatus.NO_CONTENT);
        } else {
            entity = new ResponseEntity<Wallet>(wallet, HttpStatus.OK);
        }
        return entity;

    }

//    @PostMapping("/addmoney")
//    public ResponseEntity<?> addMoneyToWallet(@RequestBody Long phoneNumber, @RequestBody Double amount) {
//        Wallet wallet = walletService.getWalletByPhoneNumber(phoneNumber);
//        if (wallet == null) {
//            return new ResponseEntity<String>("No wallet", HttpStatus.NOT_FOUND);
//        }
//        wallet.setAmount(wallet.getAmount() + amount);
//        walletService.addWallet(wallet);
//        return new ResponseEntity<String>("Amount added successfully", HttpStatus.OK);
//    }

    @PostMapping("/addmoney")
    public ResponseEntity<?> addMoneyToWallet(@RequestBody WalletRequest request) {
        Long phoneNumber = request.getPhoneNumber();
        Double amount = request.getAmount();
        Wallet wallet = walletService.getWalletByPhoneNumber(phoneNumber);
        if (wallet == null) {
            return new ResponseEntity<String>("No wallet", HttpStatus.NOT_FOUND);
        }
        wallet.setAmount(wallet.getAmount() + amount);
        walletService.addWallet(wallet);
        return new ResponseEntity<String>("Amount added successfully", HttpStatus.OK);
    }


    @PostMapping("/withdrawmoney")
    public ResponseEntity<?> withdrawMoney(@RequestBody WalletRequest request) {
        Wallet wallet = walletService.getWalletByPhoneNumber(request.getPhoneNumber());
        if (wallet == null) {
            return new ResponseEntity<String>("No wallet", HttpStatus.NOT_FOUND);
        } else if (wallet.getAmount() < request.getAmount()) {
            return new ResponseEntity<String>("Insufficient balance", HttpStatus.BAD_REQUEST);
        }
        wallet.setAmount(wallet.getAmount() - request.getAmount());
        walletService.addWallet(wallet);
        return new ResponseEntity<String>("Amount withdrawn successfully", HttpStatus.OK);
    }

    @PostMapping("/sendmoney")
    public ResponseEntity<?> sendMoney(@RequestBody SendMoneyRequest sendMoneyRequest) {
        boolean isTransactionSuccessful = walletService.sendMoney(sendMoneyRequest.getSenderPhoneNumber(), sendMoneyRequest.getReceiverPhoneNumber(), sendMoneyRequest.getAmount());
        if (isTransactionSuccessful) {
            return new ResponseEntity<String>("Transaction successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("Transaction failed", HttpStatus.BAD_REQUEST);
        }
    }

}

