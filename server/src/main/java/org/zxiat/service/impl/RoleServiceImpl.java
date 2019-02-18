package org.zxiat.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.zxiat.controller.UserController;
import org.zxiat.dao.RoleRepository;
import org.zxiat.entity.Role;
import org.zxiat.service.RoleService;

import java.util.List;

/**
 * Created by Jeremy on 2019/2/15.
 */
@Service
public class RoleServiceImpl implements RoleService{

  private static Logger logger = LoggerFactory.getLogger(UserController.class);

  private final RoleRepository roleRepository;

  public RoleServiceImpl(RoleRepository roleRepository) {
    this.roleRepository = roleRepository;
  }

  @Override
  public List<Role> getRoles() {
    return (List<Role>)roleRepository.findAll();
  }

  @Override
  public Role getRoleById(Long id) {
    return this.roleRepository.findById(id);
  }
}
