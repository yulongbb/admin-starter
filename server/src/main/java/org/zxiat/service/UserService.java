package org.zxiat.service;

import org.springframework.web.multipart.MultipartFile;
import org.zxiat.entity.User;

import java.util.List;

/**
 * Created by Jeremy on 2019/1/22.
 */
public interface UserService {
  List<User> getUsers();

  User getUserById(Long id);

  User getUserByUsername(String username);

  User addUser(User user);

  User updateUser(User user);

  void deleteUser(Long id);

  void deleteBatchUser(List<Long> users);
}
