package com.example.backend1.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "Workouts")
public class Workouts {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String type;
    private String image_url;
    private String difficulty;

    @ManyToOne
    @JoinColumn(name = "creator_id", nullable = false)
    private MyAppUser creator;

}
