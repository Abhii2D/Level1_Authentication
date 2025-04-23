package com.auth.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Id;

public class signin {

	
	private String username;
	
	
	private String password;

	public signin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
}
