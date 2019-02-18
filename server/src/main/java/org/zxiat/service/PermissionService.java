package org.zxiat.service;

import org.zxiat.entity.Permission;

import java.util.List;

/**
 * Created by Jeremy on 2019/2/18.
 */
public interface PermissionService {
  List<Permission> getPermissions();
}
