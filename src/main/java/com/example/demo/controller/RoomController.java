package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.model.Room;
import com.example.demo.service.CustomerService;
import com.example.demo.service.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api")
public class RoomController {

    // @Autowired
    private CustomerService customerService;

    // http://localhost:9090/api/room
    @GetMapping(value = "/room")
    public ResponseEntity<List<Room>> findAll(){

        List<Room> rooms = new ArrayList<>();

        Room room = new Room(3, 345,4,true);
        rooms.add(room);

        return ResponseEntity.ok( rooms);

    }

    // http://localhost:9090/api/room/?id=5
    @GetMapping(value = "/room/?id")
    public ResponseEntity<Room> findByParamId( @RequestParam int id){

        Room room = new Room(id, 345,4,true);
        return ResponseEntity.ok( room);

    }

    // http://localhost:9090/api/room/5
    @GetMapping(value = "/room/{id}")
    public ResponseEntity<Room> findByPathId( @PathVariable int id){

        Room room = new Room(id, 345,4,true);
        return ResponseEntity.ok( room);

    }

}

