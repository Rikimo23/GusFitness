package com.example.backend1.controller;

import com.example.backend1.common.ExerciseTrackerRepository;
import com.example.backend1.model.ExerciseTracker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/exerciseTrackers")
public class ExerciseTrackerController {

    @Autowired
    private ExerciseTrackerRepository exerciseTrackerRepository;

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseTracker> getExerciseTrackerById(@PathVariable Integer id) {
        Optional<ExerciseTracker> exerciseTracker = exerciseTrackerRepository.findById(id);
        return exerciseTracker.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<List<ExerciseTracker>> createExerciseTrackers(@RequestBody List<ExerciseTracker> exerciseTrackers) {
        List<ExerciseTracker> savedTrackers = exerciseTrackerRepository.saveAll(exerciseTrackers);
        return ResponseEntity.ok(savedTrackers);
    }


    @PutMapping("/{id}")
    public ResponseEntity<ExerciseTracker> updateExerciseTracker(@PathVariable Integer id, @RequestBody ExerciseTracker updatedExerciseTracker) {
        Optional<ExerciseTracker> existingExerciseTracker = exerciseTrackerRepository.findById(id);
        if (existingExerciseTracker.isPresent()) {
            ExerciseTracker exerciseTracker = existingExerciseTracker.get();
            exerciseTracker.setExerciseName(updatedExerciseTracker.getExerciseName());
            exerciseTracker.setSets(updatedExerciseTracker.getSets());
            exerciseTracker.setReps(updatedExerciseTracker.getReps());
            exerciseTracker.setWeight(updatedExerciseTracker.getWeight());
            exerciseTrackerRepository.save(exerciseTracker);
            return ResponseEntity.ok(exerciseTracker);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExerciseTracker(@PathVariable Integer id) {
        Optional<ExerciseTracker> exerciseTracker = exerciseTrackerRepository.findById(id);
        if (exerciseTracker.isPresent()) {
            exerciseTrackerRepository.delete(exerciseTracker.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}