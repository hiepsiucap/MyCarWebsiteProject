package com.mycar.nhom13.RestController;


import com.mycar.nhom13.Dto.ChangePasswordDTO;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.Service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
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
        return userService.findById(id);

    }
    @GetMapping("/users/current")
    public User retrieveCurrentUser(HttpServletRequest request){
        int id=getUserIdFromCookie(request);
        return userService.findById(id);
    }
    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody @Valid User user){

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

    @PostMapping("/users/licensecheck")
    public ResponseEntity<User> checkLicense(HttpServletRequest request, @RequestParam("id") int id,@RequestParam("check") boolean check){
        int staffId=getUserIdFromCookie(request);
        User checked = userService.checkLicense(staffId,id,check);
        return new ResponseEntity<>(checked, new HttpHeaders(), HttpStatus.OK);
    }
    @PostMapping("/users/changepassword")
    public ResponseEntity<String> changePassword(@RequestBody @Valid ChangePasswordDTO changePasswordDto, HttpServletRequest httpServletRequest) {
        int id = getUserIdFromCookie(httpServletRequest);
        boolean isPasswordChanged = userService.changePassword(changePasswordDto,id);
        if (isPasswordChanged) {
            return ResponseEntity.ok("Password changed successfully");
        } else {
            return ResponseEntity.badRequest().body("Invalid current password");
        }
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
