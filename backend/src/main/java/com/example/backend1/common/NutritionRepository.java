package com.example.backend1.common;


import com.example.backend1.model.Nutrition;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Repository
    public interface NutritionRepository extends JpaRepository<Nutrition, Integer> {
       Optional<Nutrition> findByCalories(Integer calories);
    }
