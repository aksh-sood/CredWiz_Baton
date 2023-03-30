package com.stackroute.walletservice.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.stackroute.walletservice.entity.Transaction;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
//        @Query(value="SELECT * FROM Transaction as t WHERE t.contactNumber = ?1", nativeQuery = true)
//        List<Transaction> findAllByContactNumber(@Param("contactNumber") String contactNumber);

    List<Transaction> findByContactNumber(String contactNumber, Sort sort);
}



