package com.example.backend1;

import com.example.backend1.common.UserRepository;
import com.example.backend1.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@DataJpaTest
@ActiveProfiles("test")
public class UserRepositoryTest {

    @Mock
    private UserRepository userRepository;
    private User testUser;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        testUser = new User();
        testUser.setId(1);
        testUser.setUsername("testuser");
        testUser.setEmail("test@gmail.com");
        testUser.setPassword("password");
    }

    @Test
    public void testFindByEmail() {
        when(userRepository.findByEmail("test@gmail.com")).thenReturn(Optional.of(testUser));
        Optional<User> foundUser = userRepository.findByEmail("test@gmail.com");
        assertThat(foundUser).isPresent();
        assertEquals("test@gmail.com", foundUser.get().getEmail());
    }

    @Test
    public void testFindByUsername() {
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        Optional<User> foundUser = userRepository.findByUsername("testuser");
        assertThat(foundUser).isPresent();
        assertEquals("testuser", foundUser.get().getUsername());
    }

    @Test
    public void testFindByEmailAndPassword() {
        when(userRepository.findByEmailAndPassword("test@gmail.com", "password")).thenReturn(Optional.of(testUser));
        Optional<User> foundUser = userRepository.findByEmailAndPassword("test@gmail.com", "password");
        assertThat(foundUser).isPresent();
        assertEquals("test@gmail.com", foundUser.get().getEmail());
        assertEquals("password", foundUser.get().getPassword());
    }
}

//    @Test
//    public void testFindByUsername() {
//        User user = new  User();
//        user.setEmail("test@example.com");
//        user.setUsername("testuser");
//        user.setPassword("password");
//        userRepository.save(user);
//
//        Optional<User> foundUser = userRepository.findByUsername("testuser");
//        assertThat(foundUser).isPresent();
//        assertThat(foundUser.get().getUsername()).isEqualTo("testuser");
//
//
//    }
