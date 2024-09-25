package com.example.backend1.config;

import com.example.backend1.common.ExerciseTrackerRepository;
import com.example.backend1.common.NutritionRepository;
import com.example.backend1.common.UserRepository;
import com.example.backend1.model.ExerciseTracker;
import com.example.backend1.model.Nutrition;
import com.example.backend1.model.User;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Component
public class RunJsonDataLoader implements CommandLineRunner {
    private final Logger logger = LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final ExerciseTrackerRepository exerciseTrackerRepository;
    private final NutritionRepository nutritionRepository;
    private final UserRepository userRepository;
    final ObjectMapper objectMapper;

    public RunJsonDataLoader(UserRepository userRepository,ExerciseTrackerRepository exerciseTrackerRepository, NutritionRepository nutritionRepository, ObjectMapper objectMapper) {
        this.exerciseTrackerRepository = exerciseTrackerRepository;
        this.nutritionRepository = nutritionRepository;
      this.userRepository = userRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        loadExerciseTrackers();
        loadNutritions();
        loadUsers();
    }

    private void loadExerciseTrackers() {
        if (exerciseTrackerRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/exerciseTrack.json")) {
                if (inputStream == null) {
                    throw new RuntimeException("Exercise data file not found");
                }
                List<ExerciseTracker> exerciseTrackers = objectMapper.readValue(inputStream, new TypeReference<List<ExerciseTracker>>() {
                });
                logger.info("Exercise Tracker List: {}", exerciseTrackers);
                exerciseTrackerRepository.saveAll(exerciseTrackers);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load exercise data from JSON file", e);
            }
        } else {
            logger.info("Exercise trackers already loaded");
        }
    }

    private void loadNutritions() {
        if (nutritionRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/nutrition.json")) {
                if (inputStream == null) {
                    throw new RuntimeException("Nutrition data file not found");
                }
                List<Nutrition> nutritions = objectMapper.readValue(inputStream, new TypeReference<List<Nutrition>>() {
                });
                logger.info("Nutrition List: {}", nutritions);
                nutritionRepository.saveAll(nutritions);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load nutrition data from JSON file", e);
            }
        } else {
            logger.info("Nutritions already loaded");
        }
    }

    private void loadUsers() {
        if (userRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/users.json")) {
                if (inputStream == null) {
                    throw new RuntimeException("User data file not found");
                }
                List<User> users = objectMapper.readValue(inputStream, new TypeReference<List<User>>() {
                });
                logger.info("User List: {}", users);
                userRepository.saveAll(users);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load user data from JSON file", e);
            }
        } else {
            logger.info("Users already loaded");
        }
    }
}