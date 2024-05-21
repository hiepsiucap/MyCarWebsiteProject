package com.mycar.nhom13.RestController;


import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.Service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

        return user;
    }
    @GetMapping("/users/current")
    public User retrieveCurrentUser(HttpServletRequest request){
        int id=getUserIdFromCookie(request);
        User user = userService.findById(id);

        return user;
    }
    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody User user){

        User savedUser =userService.save(user);

        return new ResponseEntity<>(savedUser,new HttpHeaders(), HttpStatus.CREATED);
    }

    @PatchMapping("/users")
    public ResponseEntity<User> updateUser(HttpServletRequest request, @RequestBody Map<String, Object> fields) {
        int id=getUserIdFromCookie(request);
        User updatedUser = userService.update(id, fields);

        return new ResponseEntity<>(updatedUser, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping("/users/license")
    public ResponseEntity<User> uploadLicense(@RequestParam("image") MultipartFile file,
                                              HttpServletRequest request) throws IOException {
        int id=getUserIdFromCookie(request);
        User savedUser = userService.saveLicense(file,id);
        return new ResponseEntity<>(savedUser, new HttpHeaders(), HttpStatus.OK);


    }

    @PostMapping("/users/avatar")
    public ResponseEntity<User> uploadAvatar(@RequestParam("image") MultipartFile file,
                                             HttpServletRequest request) throws IOException {
        int id=getUserIdFromCookie(request);
        User savedUser = userService.saveAvatar(file,id);
        return new ResponseEntity<>(savedUser, new HttpHeaders(), HttpStatus.OK);

    }

    private int getUserIdFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("auth_by_cookie")) {
                    String cookieValue = cookie.getValue();
                    String[] parts = cookieValue.split("&");
                    return Integer.parseInt(parts[0]);
                }
            }
        }
        return 0;
    }
}
