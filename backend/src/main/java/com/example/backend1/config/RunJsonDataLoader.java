package com.example.backend1.config;

import com.example.backend1.common.ExerciseRepository;
import com.example.backend1.common.NutritionRepository;
import com.example.backend1.common.UserRepository;
import com.example.backend1.model.Exercise;
import com.example.backend1.model.Nutrition;
import com.example.backend1.model.User;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
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
    private final ExerciseRepository exerciseRepository;
    private final NutritionRepository nutritionRepository;
    private final ObjectMapper objectMapper;
    private final UserRepository userRepository;

    public RunJsonDataLoader(ExerciseRepository exerciseRepository, UserRepository userRepository, ObjectMapper objectMapper, NutritionRepository nutritionRepository) {
        this.exerciseRepository = exerciseRepository;
        this.objectMapper = objectMapper;
        this.nutritionRepository = nutritionRepository;
        this.userRepository = userRepository;

    }

    @Override
    public void run(String... args) throws Exception {
        loadExercises();
        loadUsers();
        loadNutrition();
    }


    private void loadExercises() {
        if (exerciseRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/exercise.json")) {
                if (inputStream == null) {
                    throw new RuntimeException("Exercise data file not found");
                }
                List<Exercise> exercises = objectMapper.readValue(inputStream, new TypeReference<List<Exercise>>() {
                });
                logger.info("Exercise List: {}", exercises);
                exerciseRepository.saveAll(exercises);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load exercise data from JSON file", e);
            }
        } else {
            logger.info("Exercises already loaded");
        }
    }
    private void loadNutrition() {
        if (nutritionRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/nutrition.json")) {
                if (inputStream == null) {
                    throw new RuntimeException("Nutrition data file not found");
                }
                List<Nutrition> nutritionList = objectMapper.readValue(inputStream, new TypeReference<List<Nutrition>>() {
                });
                logger.info("Nutrition List: {}", nutritionList);
               nutritionRepository.saveAll(nutritionList);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load nutrition data from JSON file", e);
            }
        } else {
            logger.info("Nutrition already loaded");
        }
    }
    private void loadUsers() {
        if (userRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/users.json")) {
                if (inputStream == null) {
                    throw new RuntimeException("Users data file not found");
                }
                List<User> users = objectMapper.readValue(inputStream, new TypeReference<List<User>>() {
                });
                logger.info("Users List: {}", users);
                userRepository.saveAll(users);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load users data from JSON file", e);
            }
        } else {
            logger.info("Users already loaded");
        }
    }
}