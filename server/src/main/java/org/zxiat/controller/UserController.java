package org.zxiat.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.zxiat.entity.User;
import org.zxiat.service.UserService;

import java.util.List;

/**
 * Created by Jeremy on 2019/1/22.
 * 用户接口列表
 */
@RestController
@CrossOrigin("*")
@RequestMapping("api")
public class UserController {

  private static Logger logger = LoggerFactory.getLogger(UserController.class);

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/users")
  public List<User> users(){
    return this.userService.getUsers();
  }

  @GetMapping("/users/id")
  public User getUserById(@RequestParam Long id){
    return this.userService.getUserById(id);
  }

  @GetMapping("/users/username")
  public User getUserByUsername(@RequestParam String username){
    return this.userService.getUserByUsername(username);
  }

}
