package com.stackroute.userservice.repository;

import com.stackroute.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, String> {

    public Optional<User> findByContactNumberAndPassword(long contactNumber,String password);

//    public Optional<User> findByUserId(long userId);
    public Optional<User> findByContactNumber(long contactNumber);

    public long deleteByContactNumber(long contactNumber);

//    public Optional<List<User>> findByFirstNameAndLastName(String firstName,String lastName);




}
