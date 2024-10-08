package com.example.backend1.common;

import com.example.backend1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmailAndPassword(String email, String password);
@Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findByEmail(String email);

@Query("SELECT u FROM User u WHERE u.username = :username")
    Optional<User> findByUsername(String username);
}
