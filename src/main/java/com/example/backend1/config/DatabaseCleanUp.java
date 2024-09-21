package com.example.backend1.config;

import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.beans.Statement;
import java.sql.Connection;
import java.util.logging.Logger;

@Configuration
public class DatabaseCleanUp {

    @Autowired
    private DataSource dataSource ;

    public DatabaseCleanUp(DataSource dataSource) {
    }


    @Bean
    public DatabaseCleanUp databaseCleanup(){
        return new DatabaseCleanUp(dataSource);



        }

      public static class DatabaseCleanup {

        private DataSource dataSource;
        private final Logger logger = Logger.getLogger(DatabaseCleanup.class.getName());


        public DatabaseCleanup(DataSource dataSource) {
            this.dataSource = dataSource;
        }
            @PreDestroy
              public void dropDatabaseTable() {
                try(Connection connection = dataSource.getConnection()){

                    Statement statement = (Statement) connection.createStatement();
                    statement.execute(sql "DROP TABLE IF EXIST workouts");
                    statement.execute(sql "DROP TABLE IF EXIST user_roles");



                    logger.info("Table dropped succesfully");


                }catch(Exception e){
                    e.printStackTrace();
                }



            }



        }
      }

    }

