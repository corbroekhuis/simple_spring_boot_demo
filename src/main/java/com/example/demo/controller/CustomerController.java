package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = {"http://localhost:5500", "http://127.0.0.1:5500"})
public class CustomerController {

    private CustomerService customerService;

    public CustomerController(){}

    @Autowired
    public CustomerController( CustomerService customerService){
        this.customerService = customerService;
    }

    // http://localhost:9090/api/customer
    @GetMapping(value = "/customer")
    public ResponseEntity<Iterable<Customer>> findAll(){

        System.out.println("Inside method findAll");

        Iterable<Customer> customers = customerService.findAll();
        return ResponseEntity.ok( customers);

    }

    // http://localhost:9090/api/customer
    @PostMapping(value = "/customer")
    public ResponseEntity<Customer> createCustomer( @RequestBody Customer customer){

        System.out.println("Inside method createCustomer");

        Customer customerCreated = customerService.createCustomer(customer);
        return ResponseEntity.ok( customerCreated);

    }



}
