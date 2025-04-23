package com.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.entity.signin;
import com.auth.entity.signup;
import com.auth.repo.authRepository;

@Service
public class authservice {

	@Autowired
	private authRepository repository;
	
	public String createUser(signup user) {
	String data =repository.createUser(user);
	return data;
	}

	public signup checkUser(signin user) {
		return repository.findUser(user);
	}
}
