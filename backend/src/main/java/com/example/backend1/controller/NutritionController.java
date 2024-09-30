package com.example.backend1.controller;

import com.example.backend1.common.NutritionRepository;
import com.example.backend1.model.Nutrition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/nutritions")
public class NutritionController {

    @Autowired
    private NutritionRepository nutritionRepository;

    @GetMapping
    public List<Nutrition> getAllNutritions() {
        return nutritionRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nutrition> getNutritionById(@PathVariable Integer id) {
        Optional<Nutrition> nutrition = nutritionRepository.findById(id);
        return nutrition.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Nutrition createNutrition(@RequestBody Nutrition nutrition) {
        return nutritionRepository.save(nutrition);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Nutrition> updateNutrition(@PathVariable Integer id, @RequestBody Nutrition nutritionDetails) {
        Optional<Nutrition> nutrition = nutritionRepository.findById(id);
        if (nutrition.isPresent()) {
            Nutrition updatedNutrition = nutrition.get();

            updatedNutrition.setCalories(nutritionDetails.getCalories());
            updatedNutrition.setProtein(nutritionDetails.getProtein());
            updatedNutrition.setCarbs(nutritionDetails.getCarbs());
            updatedNutrition.setFats(nutritionDetails.getFats());
            updatedNutrition.setUser(nutritionDetails.getUser());
            nutritionRepository.save(updatedNutrition);
            return ResponseEntity.ok(updatedNutrition);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNutrition(@PathVariable Integer id) {
        Optional<Nutrition> nutrition = nutritionRepository.findById(id);
        if (nutrition.isPresent()) {
            nutritionRepository.delete(nutrition.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}