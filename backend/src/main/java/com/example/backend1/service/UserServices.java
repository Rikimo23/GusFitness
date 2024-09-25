package com.example.backend1.service;

import com.example.backend1.model.User;

import java.util.Optional;

public interface UserServices {

 Optional<User> saveUser(User newUser);

     Optional<User> findByEmail(String email) ;

     Optional<User> findByUsername(String username);

    Optional<User> loginUser(String email, String password);
}

