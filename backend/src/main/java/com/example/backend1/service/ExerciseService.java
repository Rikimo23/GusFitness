package com.example.backend1.service;

import com.example.backend1.model.Exercise;
import com.example.backend1.common.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;

    @Transactional
    public Exercise saveExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @Transactional
    public void updateExercise(Exercise exercise) {
        exerciseRepository.save(exercise);
    }
}