package com.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.entity.signin;
import com.auth.entity.signup;
import com.auth.service.authservice;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5174")
public class authcontroller {

	@Autowired
	public authservice service;
	
	
	@PostMapping("/create")
	public String signupUSer(@RequestBody signup user) {
		String status = service.createUser(user);	
		return status;
	}
	
	// checking rest api using postman
	
	@PostMapping("/find")
	public ResponseEntity<String> signinuser(@RequestBody signin user) {
		signup status = service.checkUser(user);
	if(status.getUsername()!= null) {
		return ResponseEntity.ok("Log in successfull"); 
	}else {
		return ResponseEntity.status(401).body("unauthorized");
	}
		
	}
	
}


// This is simple backend for user authentication with rest service  Now let use the rest service with ReactJS