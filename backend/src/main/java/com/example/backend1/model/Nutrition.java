package com.example.backend1.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "nutrition")
@Entity
public class Nutrition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String Name;
    private Integer calories;
    private Integer protein;
    private Integer carbs;
    private String snack1;
    private String snack2;
    private String breakfast;
    private String lunch;
    private String dinner;
    private String snack3;
    private Integer fats;

  @ManyToOne
   @JoinColumn(name = "user_id")
    private User user;
}
