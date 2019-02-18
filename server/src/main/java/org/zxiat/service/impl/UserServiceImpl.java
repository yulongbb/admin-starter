package org.zxiat.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.zxiat.controller.UserController;
import org.zxiat.dao.RoleRepository;
import org.zxiat.entity.Role;
import org.zxiat.entity.User;
import org.zxiat.dao.UserRepository;
import org.zxiat.service.UserService;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Jeremy on 2019/1/22.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

  private static Logger logger = LoggerFactory.getLogger(UserController.class);

  private final UserRepository userRepository;
  private final RoleRepository roleRepository;


  public UserServiceImpl(UserRepository userRepository,RoleRepository roleRepository) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
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
    user.setCreateDate(new Date()); // 设置加入日期
    user.setLastDate(new Date()); // 设置最后修改日期
    /**
     * 设置默认头像
     */
    ClassPathResource avatar = new ClassPathResource("images/default_avatar.png");
    try{
      byte[] arrayUser = new byte[(int) avatar.contentLength()];
      avatar.getInputStream().read(arrayUser);
      user.setAvatar(arrayUser);
    }catch (Exception e) {
      e.printStackTrace();
    }
    /**
     * 设置默认角色
     */
    Role role = roleRepository.findByName("ROLE_USER");
    List<Role> roles = new ArrayList<>();
    roles.add(role);
    user.setRoles(roles);
    user.setState(false); // 默认不是管理员
    user.setActive(true); // 默认账号可用
    return userRepository.save(user);
  }

  @Override
  public User updateUser(User user) {
    user.setLastDate(new Date()); // 设置最后修改日期
    return userRepository.save(user);
  }

  @Override
  public void deleteUser(Long id) {
     this.userRepository.delete(id);

  }

  @Override
  public void deleteBatchUser(List<Long> users) {
    this.userRepository.deleteByIdIn(users);
  }


}
