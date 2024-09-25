package com.example.backend1.common;


//import com.example.backend1.model.User;
import org.springframework.stereotype.Repository;
import com.example.backend1.model.ExerciseTracker;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseTrackerRepository extends JpaRepository<ExerciseTracker, Integer> {
    List<ExerciseTracker> findByExerciseName(String exerciseName);
//    User findBySets(Integer sets);
//    User findByReps(Integer reps);
//    User findByWeight(Integer weight);


}
