package org.zxiat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.zxiat.entity.User;
import org.zxiat.service.UserService;

@SpringBootApplication
@CrossOrigin("*")
public class ServerApplication{

  @Autowired
  UserService userService;

  public static void main(String[] args) {
    SpringApplication.run(ServerApplication.class, args);
  }

}

