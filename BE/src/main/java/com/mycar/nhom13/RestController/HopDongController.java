package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Entity.HopDong;
import com.mycar.nhom13.Service.HopDongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class HopDongController {

    private final HopDongService hopDongService;
    @Autowired
    public HopDongController(final HopDongService hopDongService){
        this.hopDongService = hopDongService;
    }

    @GetMapping("/contracts")
    public List<HopDong> retrieveAllContracts(){
        return hopDongService.findAll();
    }

    @GetMapping("/contracts/{id}")
    public HopDong retrieveContract(@PathVariable long id){
        return hopDongService.findById(id);
    }

    @PostMapping("/contracts")
    public ResponseEntity<HopDong> createContract(@RequestBody HopDong contract){
        HopDong savedContract = hopDongService.save(contract);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedContract.getMaHD())
                .toUri();

        return ResponseEntity.created(location).build();
    }

}
