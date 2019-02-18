package org.zxiat.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.zxiat.entity.User;
import org.zxiat.service.UserService;

import java.util.ArrayList;
import java.util.Date;
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

  /**
   * 查询用户列表
   * @return
   */
  @GetMapping("/users")
  public List<User> users(){
    logger.info("查询用户列表");
    return this.userService.getUsers();
  }

  /**
   * 查询单个用户(id)
   * @param id
   * @return
   */
  @GetMapping("/users/id")
  public User getUserById(@RequestParam Long id){
    logger.info("查询单个用户(id)");
    return this.userService.getUserById(id);
  }

  /**
   * 查询单个用户(用户名)
   * @param username
   * @return
   */
  @GetMapping("/users/username")
  public User getUserByUsername(@RequestParam String username){
    logger.info("查询单个用户(用户名)");
    return this.userService.getUserByUsername(username);
  }

  /**
   * 新增单个用户
   * @param user
   * @return
   */
  @PostMapping("/users/add")
  public User addUser(@RequestBody User user){
    logger.info("新增单个用户");
    return this.userService.addUser(user);
  }

  /**
   * 修改单个用户接口
   * @param user
   * @return
   */
  @PutMapping("/users/update")
  public User updateUser(@RequestBody User user){
    logger.info("修改单个用户");
    return this.userService.updateUser(user);
  }

  /**
   * 删除单个用户
   * @param id
   */
  @DeleteMapping("/users/delete/{id}")
  public void deleteUser(@PathVariable Long id){
    logger.info("删除单个用户");
    this.userService.deleteUser(id);
  }


  /**
   * 删除多个个用户
   * @param users
   */
  @DeleteMapping("/users/delete/batch")
  public void deleteUser(@RequestParam String users){
    logger.info("删除多个个用户");
    String[] userList  = users.split(",");
    List<Long> Lids= new ArrayList<>();
    for(String str : userList){
      Lids.add(new Long(str));
    }
    this.userService.deleteBatchUser(Lids);
  }

}
