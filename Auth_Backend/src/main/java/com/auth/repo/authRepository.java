package com.auth.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.auth.entity.signin;
import com.auth.entity.signup;
import com.auth.repository.signupRepoInterface;

@Repository
public class authRepository {

	@Autowired
	private signupRepoInterface repo;
	
	public String createUser(signup user) {
		repo.save(user);
	return "User Created";
	}

	public signup findUser(signin user) {
		signup data=  repo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		return data;
	}
}
