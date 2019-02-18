package org.zxiat.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.zxiat.controller.UserController;
import org.zxiat.dao.PermissionRepository;
import org.zxiat.entity.Permission;
import org.zxiat.service.PermissionService;

import java.util.List;

/**
 * Created by Jeremy on 2019/2/18.
 */
@Service
public class PermissionServiceImpl implements PermissionService{

  private static Logger logger = LoggerFactory.getLogger(UserController.class);

  private final PermissionRepository permissionRepository;

  public PermissionServiceImpl(PermissionRepository permissionRepository) {
    this.permissionRepository = permissionRepository;
  }

  @Override
  public List<Permission> getPermissions() {
    return (List<Permission>)this.permissionRepository.findAll();
  }
}
