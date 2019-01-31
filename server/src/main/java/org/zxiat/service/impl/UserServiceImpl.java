package org.zxiat.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.zxiat.controller.UserController;
import org.zxiat.entity.User;
import org.zxiat.dao.UserRepository;
import org.zxiat.service.UserService;

import java.io.IOException;
import java.util.List;

/**
 * Created by Jeremy on 2019/1/22.
 */
@Service
public class UserServiceImpl implements UserService {

  private static Logger logger = LoggerFactory.getLogger(UserController.class);

  private final UserRepository userRepository;

  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public List<User> getUsers() {
    return (List<User>) this.userRepository.findAll();
  }

  @Override
  public User getUserById(Long id) {
    return userRepository.findById(id);
  }

  @Override
  public User getUserByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  @Override
  public User addUser(User user) {
    return userRepository.save(user);
  }


}
