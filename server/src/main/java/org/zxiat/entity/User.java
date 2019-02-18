package org.zxiat.entity;


import javax.persistence.*;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by Jeremy on 2019/1/21.
 * 用户表
 */
@Entity
public class User {

  @Id
  @GeneratedValue
  private Long id;

  private String username; // 用户名
  private String password; // 密码
  private String name; // 姓名
  private String email; // 电子邮箱
  @Lob
  private byte[] avatar; // 头像
  @Column(name = "is_active")
  private Boolean active; // 有效
  private Boolean state; // 状态
  @Column(name = "last_date")
  private Date lastDate; // 上次登录
  @Column(name = "create_date")
  private Date createDate; // 加入日期


  @ManyToMany(cascade = {CascadeType.REFRESH},fetch = FetchType.EAGER)
  private List<Role> roles; // 角色

  public User() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public List<Role> getRoles() {
    return roles;
  }

  public void setRoles(List<Role> roles) {
    this.roles = roles;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public byte[] getAvatar() {
    return avatar;
  }

  public void setAvatar(byte[] avatar) {
    this.avatar = avatar;
  }

  public Boolean getActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  public Boolean getState() {
    return state;
  }

  public void setState(Boolean state) {
    this.state = state;
  }

  public Date getLastDate() {
    return lastDate;
  }

  public void setLastDate(Date lastDate) {
    this.lastDate = lastDate;
  }

  public Date getCreateDate() {
    return createDate;
  }

  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }

}
