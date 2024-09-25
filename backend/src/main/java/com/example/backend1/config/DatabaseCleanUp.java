package com.example.backend1.config;

import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.Statement;


@Configuration
public class DatabaseCleanUp {

    @Autowired
    private DataSource dataSource;

    @Bean
    public DatabaseCleanup databaseCleanup() {
        return new DatabaseCleanup(dataSource);
    }

    public static class DatabaseCleanup {
        private DataSource dataSource;
        private final Logger logger = org.slf4j.LoggerFactory.getLogger(DatabaseCleanup.class);

        public DatabaseCleanup(DataSource dataSource) {
            this.dataSource = dataSource;
        }


            @PreDestroy
        public void dropDatabaseTable(){
            try (Connection connection = dataSource.getConnection()) {

                Statement statement = connection.createStatement();

                statement.executeUpdate("DROP TABLE IF EXISTS exercise_tracker");
                statement.executeUpdate("DROP TABLE IF EXISTS roles_users");
                statement.executeUpdate("DROP TABLE IF EXISTS roles");
                statement.executeUpdate("DROP TABLE IF EXISTS user");
                statement.executeUpdate("DROP TABLE IF EXISTS nutrition");
                statement.executeUpdate("DROP TABLE IF EXISTS user roles");
                statement.executeUpdate("DROP TABLE IF EXISTS workouts");

                logger.info("Table dropped successfully");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        }
    }





