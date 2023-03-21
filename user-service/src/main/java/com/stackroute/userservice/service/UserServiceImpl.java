package com.stackroute.userservice.service;

import com.stackroute.userservice.exceptions.ContactNumberAlreadyExistsException;
import com.stackroute.userservice.exceptions.ContactNumberNotExistException;
import com.stackroute.userservice.exceptions.EmailIdAlreadyExistsException;
import com.stackroute.userservice.exceptions.EmailIdNotExistException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements  UserService{

    @Autowired
    private UserRepository userRepository;


    public User saveUser(User user) throws ContactNumberAlreadyExistsException{
        Optional<User> optionalUser = userRepository.findByContactNumber(user.getContactNumber());
        if (optionalUser.isPresent()) {
            throw new ContactNumberAlreadyExistsException("Invalid Contact Number. Contact Number Already Exist");
        }
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String emailId) throws EmailIdNotExistException{
        Optional<User> optionalUser = userRepository.findById(emailId);
        User user = optionalUser.isEmpty() ? null : optionalUser.get();
        if(user==null){
            throw new EmailIdNotExistException("Contact Number Does Not Exist");
        }
        return user;

    }

//    public boolean deleteUserByEmailId(String emailId) throws EmailIdNotExistException {
//        Optional<User> optionalUser = userRepository.findById(emailId);
//        User user = optionalUser.isEmpty() ? null : optionalUser.get();
//
//        if (user == null) {
//            throw new EmailIdNotExistException("Email Id Not Exist");
//        }
//        userRepository.deleteById(emailId);
//        return true;
//    }

    public boolean deleteUserByContactNumber(long contactNumber)throws ContactNumberNotExistException {
        Optional<User> optionalUser = userRepository.findByContactNumber(contactNumber);
        User user=optionalUser.isEmpty()?null:optionalUser.get();
        if(user==null){
            throw new ContactNumberNotExistException("Contact Number Does Not Exist");
        }
        userRepository.deleteByContactNumber(contactNumber);
        return true;
    }

    public boolean validateUser(User user) {

        Optional<User> optionalUser = userRepository.findByContactNumberAndPassword(user.getContactNumber(), user.getPassword());
        boolean isValid = optionalUser.isEmpty() ? false : true;
        return isValid;

    }

    public User getUserByContactNumber(long contactNumber) throws ContactNumberNotExistException{
        Optional<User> optionalUser= userRepository.findByContactNumber(contactNumber);
        User user=optionalUser.isEmpty()?null:optionalUser.get();
        if(user==null){
            throw new ContactNumberNotExistException("Contact Number Does Not Exist");
        }
        return user;
    }




}
