package org.zxiat.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.zxiat.entity.Role;
import org.zxiat.service.RoleService;

import java.util.List;

/**
 * Created by Jeremy on 2019/2/15.
 */
@RestController
@CrossOrigin("*")
@RequestMapping("api")
public class RoleController {
  private static Logger logger = LoggerFactory.getLogger(UserController.class);

  private final RoleService roleService;

  public RoleController(RoleService roleService) {
    this.roleService = roleService;
  }

  /**
   * 角色列表
   * @return
   */
  @GetMapping("/roles")
  public List<Role> roles(){
    logger.info("查询角色列表接口");
    return this.roleService.getRoles();
  }

  /**
   * 查询单个角色(id)
   * @param id
   * @return
   */
  @GetMapping("/roles/id")
  public Role getRoleById(@RequestParam Long id){
    logger.info("查询单个用户(id)");
    return this.roleService.getRoleById(id);
  }


}
