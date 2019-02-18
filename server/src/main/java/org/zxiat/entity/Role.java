package org.zxiat.entity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Jeremy on 2019/1/21.
 * 角色表
 */
@Entity
public class Role {

  @Id
  @GeneratedValue
  private Long id; // 角色ID
  private String name; // 角色名称
  private String description; // 角色描述

  @ManyToMany(cascade = {CascadeType.REFRESH},fetch = FetchType.EAGER)
  private List<Permission> permissions;  // 角色权限

  public Role() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Permission> getPermissions() {
    return permissions;
  }

  public void setPermissions(List<Permission> permissions) {
    this.permissions = permissions;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
