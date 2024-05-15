package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.UserNotFoundException;
import com.mycar.nhom13.Service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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
    public User retrieveUser(@PathVariable long id){
        User user = userService.findById(id);

        if(user == null)
            throw new UserNotFoundException("User id " + id +" not found");
        return user;
    }
    @GetMapping("/users/currentuser")
    public User retrieveCurrentUser(@RequestBody long id){
        User user = userService.findById(id);

        if(user == null)
            throw new UserNotFoundException("User id " + id +" not found");
        return user;
    }
    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody User taikhoan){

        User savedUser =userService.save(taikhoan);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedUser.getUserId())
                .toUri();
        return new ResponseEntity<>(savedUser,new HttpHeaders(), HttpStatus.CREATED);
        //return ResponseEntity.created(location).build();
    }

    @PatchMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody Map<String, Object> fields) {
        User updatedUser = userService.update(id, fields);
        if (updatedUser == null)
            throw new UserNotFoundException("User id: " + id + " not found");
        return new ResponseEntity<>(updatedUser, new HttpHeaders(), HttpStatus.OK);
    }
}
