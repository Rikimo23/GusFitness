package com.example.backend1.config;

import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
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
        private final Logger logger = LoggerFactory.getLogger(DatabaseCleanup.class);

        public DatabaseCleanup(DataSource dataSource) {
            this.dataSource = dataSource;
        }

        @PreDestroy
        public void dropDatabaseTable() {
            try (Connection connection = dataSource.getConnection()) {
                Statement statement = connection.createStatement();

                // Drop foreign key constraints first
//                dropForeignKeyIfExists(statement, "exercise", "FKg5ogkjxydynj1cf2pupw96or4");
//                dropForeignKeyIfExists(statement, "exercise_steps", "FK2e85hlex8ay93ixd57tbjx2ca");
//                dropForeignKeyIfExists(statement, "exercise_tracker", "FKmegdwdf6mjrc2g7xa4eo3avxv");
//                dropForeignKeyIfExists(statement, "nutrition", "FK37o5y692ckkefv3nnb5qcn4av");

                // Drop tables in the correct order to avoid foreign key constraint issues
                statement.executeUpdate("DROP TABLE IF EXISTS exercise_steps");
                statement.executeUpdate("DROP TABLE IF EXISTS exercise");
                statement.executeUpdate("DROP TABLE IF EXISTS exercise_tracker");
                statement.executeUpdate("DROP TABLE IF EXISTS nutrition");
                statement.executeUpdate("DROP TABLE IF EXISTS workouts");
                statement.executeUpdate("DROP TABLE IF EXISTS user");

                logger.info("Tables dropped successfully");
            } catch (Exception e) {
                logger.error("Error dropping tables", e);
            }
        }

        private void dropForeignKeyIfExists(Statement statement, String tableName, String foreignKeyName) {
            try {
                ResultSet resultSet = statement.executeQuery(
                        "SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE " +
                                "WHERE TABLE_NAME = '" + tableName + "' AND CONSTRAINT_NAME = '" + foreignKeyName + "'"
                );
                if (resultSet.next()) {
                    statement.executeUpdate("ALTER TABLE " + tableName + " DROP FOREIGN KEY " + foreignKeyName);
                }
            } catch (Exception e) {
                logger.error("Error dropping foreign key " + foreignKeyName + " from table " + tableName, e);
            }
        }
    }
}