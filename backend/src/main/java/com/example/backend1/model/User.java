package com.example.backend1.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.management.relation.Role;
import java.util.HashSet;
import java.util.Set;
@Entity
@Table(name = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
//    private String firstname;
//    private String lastname;
    private String username; //a combination of firstname and lastname
    private String password;
    private String email;
    private Double bmi;



    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<ExerciseTracker> exerciseTrackers = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<Nutrition> nutritions = new HashSet<>();

//    @ManyToMany (mappedBy = "user", cascade = CascadeType.ALL)
//    private Set<Exercise> exercises = new HashSet<>();

}