package com.stackroute.userservice.service;

import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.UserRepository;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @SneakyThrows
    @Override
    public UserDetails loadUserByUsername(String contactNumber) {

        Optional<User> optionalUser = userRepository.findByContactNumber(contactNumber);
        User user = optionalUser.isEmpty() ? null : optionalUser.get();
        if (user != null) {
            return new org.springframework.security.core.userdetails.User(
                    user.getContactNumber(),
                    user.getPassword(),
                    Collections.emptyList());
        } else {
            throw new UsernameNotFoundException("Contact Number Does Not Exist");
        }

    }

}