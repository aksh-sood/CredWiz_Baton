package com.stackroute.userservice.service;

import com.stackroute.userservice.exceptions.ContactNumberAlreadyExistsException;
import com.stackroute.userservice.exceptions.ContactNumberNotExistException;
import com.stackroute.userservice.exceptions.CustomException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.payload.UserDto;
import com.stackroute.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
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

    public boolean deleteUserByContactNumber(String contactNumber)throws ContactNumberNotExistException {
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
        boolean isValid = optionalUser.isEmpty() || false;
        return isValid;
    }

    public User getUserByContactNumber(String contactNumber) throws ContactNumberNotExistException{
        Optional<User> optionalUser= userRepository.findByContactNumber(contactNumber);
        User user=optionalUser.isEmpty()?null:optionalUser.get();
        if(user==null){
            throw new ContactNumberNotExistException("Contact Number Does Not Exist");
        }
        return user;
    }

    @Override
    public User updateUser(UserDto userDto) throws CustomException, ConstraintViolationException, ContactNumberNotExistException {

        Optional<User> optionalUser= userRepository.findByContactNumber(userDto.getContactNumber());

        User user=optionalUser.isEmpty()?null:optionalUser.get();
        if(user==null){
            throw new ContactNumberNotExistException("Contact Number Does Not Exist");
        }


        if (userDto.getEmailId() != null ) {
            // Check email validation
            if (!userDto.getEmailId().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
                throw new CustomException("Invalid email format.");
            }
            user.setEmailId(userDto.getEmailId());
        }

        if (userDto.getPassword() != null) {
            // Check password validation
            if (!userDto.getPassword().matches("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$")) {
                throw new CustomException("Password must be between 8 and 20 characters.");
            }
            user.setPassword(userDto.getPassword());
        }

        if (userDto.getUserName() != null && !userDto.getUserName().isBlank()) {
            user.setUserName(userDto.getUserName());
        }

        if (userDto.getAddress() != null && !userDto.getAddress().isBlank()) {
            user.setAddress(userDto.getAddress());
        }

        return userRepository.save(user);

    }

}
