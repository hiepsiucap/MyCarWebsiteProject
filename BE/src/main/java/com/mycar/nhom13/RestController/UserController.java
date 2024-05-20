package com.mycar.nhom13.RestController;


import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.UserNotFoundException;
import com.mycar.nhom13.Service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService){

        this.userService=userService;
    }
    @GetMapping("/users")
    public List<User> retrieveAllUsers(){
        return userService.findAll();
    }

    @GetMapping("/users/{id}")
    public User retrieveUser(@PathVariable int id){
        User user = userService.findById(id);

        if(user == null)
            throw new UserNotFoundException("User id " + id +" not found");
        return user;
    }
    @GetMapping("/users/currentuser")
    public User retrieveCurrentUser(@RequestBody int id){
        User user = userService.findById(id);

        if(user == null)
            throw new UserNotFoundException("User id " + id +" not found");
        return user;
    }
    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody User user){

        User savedUser =userService.save(user);

        return new ResponseEntity<>(savedUser,new HttpHeaders(), HttpStatus.CREATED);
        //return ResponseEntity.created(location).build();
    }

    @PatchMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody Map<String, Object> fields) {
        User updatedUser = userService.update(id, fields);
        if (updatedUser == null)
            throw new UserNotFoundException("User id: " + id + " not found");
        return new ResponseEntity<>(updatedUser, new HttpHeaders(), HttpStatus.OK);
    }
}
