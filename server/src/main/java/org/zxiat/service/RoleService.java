package org.zxiat.service;

import org.zxiat.entity.Role;

import java.util.List;

/**
 * Created by Jeremy on 2019/2/15.
 */
public interface RoleService {
  List<Role> getRoles();

  Role getRoleById(Long id);
}
