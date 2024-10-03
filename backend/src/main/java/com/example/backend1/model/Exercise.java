package com.example.backend1.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Setter
@Getter
@Data
@Entity
@Table(name = "exercise")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    @ElementCollection
    private List<String> steps;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private String difficulty;

    // New columns
    private boolean easy;
    private boolean medium;
    private boolean hard;

    // URL field
    private String url;

    // New column
    @ElementCollection
    @CollectionTable(name = "exercise_muscle_groups", joinColumns = @JoinColumn(name = "exercise_id"))
    @Column(name = "muscle_group")
    private List<String> muscleGroups;
}