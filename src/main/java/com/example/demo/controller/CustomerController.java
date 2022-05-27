package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.service.CustomerService;
import com.example.demo.service.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class CustomerController {

   // @Autowired
    private CustomerService customerService;

    // http://localhost:9090/api/customer
    @GetMapping(value = "/customer")
    public ResponseEntity<Iterable<Customer>> findAll(){

        Iterable<Customer> customers = customerService.findAll();
        return ResponseEntity.ok( customers);

    }

    // http://9090/api/customer
    @PostMapping(value = "/customer")
    public ResponseEntity<Customer> createCustomer( @RequestBody Customer customer){

        Customer customerCreated = customerService.createCustomer(customer);

        return ResponseEntity.ok( customerCreated);

    }



}
