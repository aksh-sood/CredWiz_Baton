package com.stackroute.userservice.controller;

import com.stackroute.userservice.exceptions.ContactNumberAlreadyExistsException;
import com.stackroute.userservice.exceptions.ContactNumberNotExistException;
import com.stackroute.userservice.exceptions.CustomException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.payload.UserAuthenticateRequest;
import com.stackroute.userservice.payload.UserAuthenticateResponse;
import com.stackroute.userservice.payload.UserDto;
import com.stackroute.userservice.service.CustomUserService;
import com.stackroute.userservice.service.UserService;
import com.stackroute.userservice.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    JwtUtils jwtTokenUtil;
    @Autowired
    private CustomUserService userDetailsService;

    @GetMapping("/admin/getAll")
    public ResponseEntity<?> getAllUser() {
        List<User> userList = userService.getAllUser();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("count", userList.size());
        map.put("list", userList);
        ResponseEntity<?> entity = new ResponseEntity<Map>(map, HttpStatus.OK);
        return entity;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid User user) {
        ResponseEntity<?> entity = null;
        try {
            userService.saveUser(user);
            entity = new ResponseEntity<String>("User Registered Successfully...", HttpStatus.CREATED);
        } catch (ContactNumberAlreadyExistsException e) {
            entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return entity;
    }

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody @Valid UserAuthenticateRequest authenticationRequest)
            throws Exception {

        ResponseEntity<?> entity = null;
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getContactNumber(),
                            authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getContactNumber());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        entity = ResponseEntity.ok(new UserAuthenticateResponse(jwt));
        return entity;
    }

    @DeleteMapping("/delete/{contactNumber}")
    public ResponseEntity<?> deleteUserByContactNumber(@PathVariable("contactNumber") String contactNumber)
            throws ContactNumberNotExistException {

//		boolean isDeleted = userService.deleteUserByContactNumber(contactNumber);
        ResponseEntity<?> entity = new ResponseEntity<String>("User Deleted Successfully", HttpStatus.OK);
        return entity;
    }

    @GetMapping("/contact/{contactNumber}")
    public ResponseEntity<?> getUserByContactNumber(@PathVariable("contactNumber") String contactNumber)
            throws ContactNumberNotExistException {
        User user = null;
        ResponseEntity<?> entity;

        user = userService.getUserByContactNumber(contactNumber);

        entity = new ResponseEntity<User>(user, HttpStatus.OK);
        return entity;
    }

    @PutMapping("/updateUser")
    public ResponseEntity<?> updateUser(@RequestBody UserDto userDto) throws CustomException, ConstraintViolationException, ContactNumberNotExistException {

        User user = userService.getUserByContactNumber(userDto.getContactNumber());

        if (user == null) {
            throw new CustomException("User does not exist.");
        }

        if (userDto.getEmailId() != null) {
            // Check email validation
            if (!userDto.getEmailId().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
                throw new CustomException("Invalid email format.");
            }
            user.setEmailId(userDto.getEmailId());
        }

        if (userDto.getPassword() != null) {
            // Check password validation
            if (userDto.getPassword().length() < 8 || userDto.getPassword().length() > 20) {
                throw new CustomException("Password must be between 8 and 20 characters.");
            }
            user.setPassword(userDto.getPassword());
        }

        if (userDto.getUserName() != null) {
            user.setUserName(userDto.getUserName());
        }

        if (userDto.getAddress() != null) {
            user.setAddress(userDto.getAddress());
        }

        User updatedUser = userService.updateUser(user);
        return ResponseEntity.ok(updatedUser);
    }


    @ExceptionHandler(ContactNumberNotExistException.class)
    public ResponseEntity<?> noContactNumberExceptionHandler(Exception e) {
        ResponseEntity<?> entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        return entity;
    }

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<?> customExceptionHandler(Exception e) {
        ResponseEntity<?> entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        return entity;
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<?> constraintViolationExceptionHandler(Exception e) {
        ResponseEntity<?> entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        return entity;
    }

}
