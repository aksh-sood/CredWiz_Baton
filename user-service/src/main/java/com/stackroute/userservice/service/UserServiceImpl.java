package com.stackroute.userservice.service;

import com.stackroute.userservice.exceptions.ContactNumberAlreadyExistsException;
import com.stackroute.userservice.exceptions.ContactNumberNotExistException;
import com.stackroute.userservice.exceptions.EmailIdNotExistException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.payload.UserDto;
import com.stackroute.userservice.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements  UserService{

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private UserMapper userMapper;

    @Autowired
    private ModelMapper modelMapper;


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

    @Override
    public User updateUser(UserDto userDto) throws Exception {

//        User user=getUserByContactNumber(userDto.getContactNumber());
        User user=this.modelMapper.map(userDto,User.class);

//        userMapper.updateUserFromDto(userDto,user);
        return userRepository.save(user);

    }



}
