package com.stackroute.walletservice.controller;

import com.stackroute.walletservice.entity.SendMoneyRequest;
import com.stackroute.walletservice.entity.WalletRequest;
import com.stackroute.walletservice.exception.InSufficientBalanceException;
import com.stackroute.walletservice.exception.WalletNotExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stackroute.walletservice.entity.Wallet;
import com.stackroute.walletservice.service.WalletService;

@RestController
@RequestMapping("/wallet")
public class WalletController {
    @Autowired
    private WalletService walletService;

    @PostMapping("/wal")
    public ResponseEntity<String> createWallet(@RequestBody Wallet wallet) {
        walletService.addWallet(wallet);
        return new ResponseEntity<String>("Wallet created successfully", HttpStatus.CREATED);
    }

    @GetMapping("/wallet/{contactNumber}")
    public ResponseEntity<?> getWalletByContactNumber(@PathVariable("contactNumber") long id)
            throws WalletNotExistsException {
        Wallet wallet = walletService.getWalletByContactNumber(id);
        if (wallet == null) {
            throw new WalletNotExistsException("No wallet found for contact number: " + id);
        }
        return new ResponseEntity<Wallet>(wallet, HttpStatus.OK);
    }

    @PostMapping("/addmoney")
    public ResponseEntity<String> addMoneyToWallet(@RequestBody WalletRequest request)
            throws WalletNotExistsException {
        Long ContactNumber = request.getContactNumber();
        Double amount = request.getAmount();
        Wallet wallet = walletService.getWalletByContactNumber(ContactNumber);
        if (wallet == null) {
            throw new WalletNotExistsException("No wallet found for phone number: " + ContactNumber);
        }
        wallet.setBalance(wallet.getBalance() + amount);
        walletService.addWallet(wallet);
        return new ResponseEntity<String>("Amount added successfully", HttpStatus.OK);
    }

    @PostMapping("/withdrawmoney")
    public ResponseEntity<String> withdrawMoney(@RequestBody WalletRequest request)
            throws WalletNotExistsException, InSufficientBalanceException {
        Wallet wallet = walletService.getWalletByContactNumber(request.getContactNumber());
        if (wallet == null) {
            throw new WalletNotExistsException("No wallet found for phone number: " + request.getContactNumber());
        } else if (wallet.getBalance() < request.getAmount()) {
            throw new InSufficientBalanceException(
                    "Insufficient balance in wallet with phone number: " + request.getContactNumber());
        }
        wallet.setBalance(wallet.getBalance() - request.getAmount());
        walletService.addWallet(wallet);
        return new ResponseEntity<String>("Amount withdrawn successfully", HttpStatus.OK);
    }

    @PostMapping("/sendmoney")
    public ResponseEntity<String> sendMoney(@RequestBody SendMoneyRequest sendMoneyRequest)
            throws WalletNotExistsException, InSufficientBalanceException {
        boolean isTransactionSuccessful = walletService.sendMoney(sendMoneyRequest.getSenderContactNumber(),
                sendMoneyRequest.getReceiverContactNumber(), sendMoneyRequest.getAmount());
        if (isTransactionSuccessful) {
            return new ResponseEntity<String>("Transaction successful", HttpStatus.OK);
        } else {
            throw new InSufficientBalanceException("Insufficient balance in sender's wallet with phone number: "
                    + sendMoneyRequest.getSenderContactNumber());
        }
    }

}
