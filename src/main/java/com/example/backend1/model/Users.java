package com.example.backend1.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "Users")
@Entity
public class Users {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;
    private String email;
    private String enabled;
    private String age;
    private String bmi;
    private String fitnesslevel;


    //@OneToMany(mappedBy = "nutritionid" , cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Set<ExerciseTracker> backend= new HashSet<>();//fix later






}
