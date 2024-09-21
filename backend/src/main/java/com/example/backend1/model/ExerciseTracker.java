package com.example.backend1.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "exercise_tracker")
public class ExerciseTracker {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String exercisename;
    private String date;
    private String repetitions;
    private String sets;
    private String weight;
    private String caloriesburned;





    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    private Users userid;

}
