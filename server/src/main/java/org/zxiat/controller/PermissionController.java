package org.zxiat.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zxiat.entity.Permission;
import org.zxiat.entity.Role;
import org.zxiat.service.PermissionService;

import java.util.List;

/**
 * Created by Jeremy on 2019/2/18.
 */
@RestController
@CrossOrigin("*")
@RequestMapping("api")
public class PermissionController {

  private static Logger logger = LoggerFactory.getLogger(UserController.class);

  private final PermissionService permissionService;

  public PermissionController(PermissionService permissionService) {
    this.permissionService = permissionService;
  }

  /**
   * 权限列表
   * @return
   */
  @GetMapping("/permissions")
  public List<Permission> roles(){
    logger.info("查询权限列表接口");
    return this.permissionService.getPermissions();
  }
}
