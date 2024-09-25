package com.example.backend1.service;

import com.example.backend1.common.UserRepository;
import com.example.backend1.model.User;
import com.example.backend1.service.UserServices;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
@RequiredArgsConstructor
public class UserServicesImplements implements UserServices {

    private final UserRepository userRepository;


    public Optional<User> saveUser(User newUser) {
        return Optional.of(userRepository.save(newUser));
    }


    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> findByUsername(String  username) {
        return userRepository.findByUsername(username);
    }

    public Optional<User> loginUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            User foundUser = user.get();
            if (foundUser.getPassword().equals(password)) {
                return Optional.of(foundUser);
            }
        }
        return Optional.empty();
    }
}