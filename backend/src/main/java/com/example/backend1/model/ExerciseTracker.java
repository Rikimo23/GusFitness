package com.example.backend1.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "exercise_tracker")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExerciseTracker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String exerciseName;
    private Integer sets;
    private Integer reps;
    private Integer weight; // in kg

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}