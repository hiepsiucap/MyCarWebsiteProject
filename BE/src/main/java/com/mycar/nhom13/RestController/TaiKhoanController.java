package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.TaiKhoan;
import com.mycar.nhom13.ExceptionHandler.UserNotFoundException;
import com.mycar.nhom13.Service.TaiKhoanService;
import org.apache.catalina.User;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
public class TaiKhoanController {

    private TaiKhoanService userService;

    public TaiKhoanController(TaiKhoanService userService){

        this.userService=userService;
    }
    @GetMapping("/users")
    public List<TaiKhoan> retrieveAllUsers(){
        return userService.findAll();
    }

    @GetMapping("/users/{id}")
    public TaiKhoan retrieveUser(@PathVariable long id){
        TaiKhoan user = userService.findById(id);

        if(user == null)
            throw new UserNotFoundException("User id " + id +" not found");
        return user;
    }
    @GetMapping("/users/currentuser")
    public TaiKhoan retrieveCurrentUser(@RequestBody long id){
        TaiKhoan user = userService.findById(id);

        if(user == null)
            throw new UserNotFoundException("User id " + id +" not found");
        return user;
    }
    @PostMapping("/users")
    public ResponseEntity<TaiKhoan> postUser(@RequestBody TaiKhoan taikhoan){

        TaiKhoan savedUser =userService.save(taikhoan);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedUser.getMaTK())
                .toUri();
        return new ResponseEntity<>(savedUser,new HttpHeaders(), HttpStatus.CREATED);
        //return ResponseEntity.created(location).build();
    }

    @PatchMapping("/users/{id}")
    public ResponseEntity<TaiKhoan> updateUser(@PathVariable long id, @RequestBody Map<String, Object> fields) {
        TaiKhoan updatedUser = userService.update(id, fields);
        if (updatedUser == null)
            throw new UserNotFoundException("User id: " + id + " not found");
        return new ResponseEntity<>(updatedUser, new HttpHeaders(), HttpStatus.OK);
    }
}
