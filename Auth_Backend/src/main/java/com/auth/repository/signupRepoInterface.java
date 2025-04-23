package com.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.entity.signup;

public interface signupRepoInterface extends JpaRepository<signup, String> {

	signup findByUsernameAndPassword(String username,String password);
}
