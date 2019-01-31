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
  private Long id;
  private String name; // 角色名称

  @ManyToMany(cascade = {CascadeType.REFRESH},fetch = FetchType.EAGER)
  private List<Permission> permissions;

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

  @Override
  public String toString() {
    return "Role{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", permissions=" + permissions +
      '}';
  }
}
