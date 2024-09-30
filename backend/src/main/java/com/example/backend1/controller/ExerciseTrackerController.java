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

    @GetMapping
    public List<ExerciseTracker> getAllExerciseTrackers() {
        return exerciseTrackerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseTracker> getExerciseTrackerById(@PathVariable Integer id) {
        Optional<ExerciseTracker> exerciseTracker = exerciseTrackerRepository.findById(id);
        return exerciseTracker.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ExerciseTracker createExerciseTracker(@RequestBody ExerciseTracker exerciseTracker) {
        return exerciseTrackerRepository.save(exerciseTracker);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ExerciseTracker> updateExerciseTracker(@PathVariable Integer id, @RequestBody ExerciseTracker exerciseTrackerDetails) {
        Optional<ExerciseTracker> exerciseTracker = exerciseTrackerRepository.findById(id);
        if (exerciseTracker.isPresent()) {
            ExerciseTracker updatedExerciseTracker = exerciseTracker.get();
            updatedExerciseTracker.setExerciseName(exerciseTrackerDetails.getExerciseName());
            updatedExerciseTracker.setSets(exerciseTrackerDetails.getSets());
            updatedExerciseTracker.setReps(exerciseTrackerDetails.getReps());
            updatedExerciseTracker.setWeight(exerciseTrackerDetails.getWeight());
            updatedExerciseTracker.setUser(exerciseTrackerDetails.getUser());
            exerciseTrackerRepository.save(updatedExerciseTracker);
            return ResponseEntity.ok(updatedExerciseTracker);
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