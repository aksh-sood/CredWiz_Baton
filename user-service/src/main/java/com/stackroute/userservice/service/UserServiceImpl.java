package com.stackroute.userservice.service;

import com.stackroute.userservice.exceptions.ContactNumberAlreadyExistsException;
import com.stackroute.userservice.exceptions.ContactNumberNotExistException;
import com.stackroute.userservice.exceptions.CustomException;
import com.stackroute.userservice.exceptions.EmailIdNotExistException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.payload.UserDto;
import com.stackroute.userservice.repository.UserRepository;
import org.modelmapper.ModelMapper;
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
        boolean isValid = optionalUser.isEmpty() ? false : true;
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
    public User updateUser(UserDto userDto) throws CustomException, ConstraintViolationException {

        Optional<User> optionalUser= userRepository.findByContactNumber(userDto.getContactNumber());

        User oldUser=optionalUser.isEmpty()?null:optionalUser.get();
        if(oldUser==null){
            throw new CustomException("Contact Number Does Not Exist");
        }


//        if(userDto.getAddress().isEmpty() || userDto.getAddress().isBlank()){
//           userDto.setAddress(oldUser.getAddress());
//        }
//        if(userDto.getUserName().isBlank()||userDto.getUserName().isEmpty()){
//            userDto.setUserName(oldUser.getUserName());
//        }
//        if(userDto.getPassword().isBlank()||userDto.getPassword().isEmpty()){
//            userDto.setPassword(oldUser.getPassword());
//        }
//        if(userDto.getEmailId().isBlank()||userDto.getEmailId().isEmpty()){
//            userDto.setEmailId(oldUser.getEmailId());
//        }
        try{
        modelMapper.map(userDto,oldUser);}catch(ConstraintViolationException e){
            System.out.print("Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrroooooo");
        }
        return userRepository.save(oldUser);

    }



}
