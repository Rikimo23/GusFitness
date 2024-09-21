package com.example.backend1.model;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Table(name = "exercise_track")
public class WorkoutPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String weekdays;
    private String exercise;
    private String reprange;
    private String sets;






    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    private Users userid;

}
