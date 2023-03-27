package com.stackroute.userservice.repository;

import com.stackroute.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByContactNumberAndPassword(String contactNumber,String password);

    Optional<User> findByContactNumber(String contactNumber);

    long deleteByContactNumber(String contactNumber);





}
