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
  @Column(name = "first_name")
  private String firstName; // 名字
  @Column(name = "last_name")
  private String lastName; // 姓氏
  private String email; // 电子邮箱
  @Lob
  private byte[] avatar; // 头像
  @Column(name = "is_active")
  private Boolean isActive; // 有效
  private Boolean state; // 状态
  @Column(name = "last_date")
  private Date lastDate; // 上次登录
  @Column(name = "create_date")
  private Date createDate; // 加入日期


  @ManyToMany(cascade = {CascadeType.REFRESH},fetch = FetchType.EAGER)
  private List<Role> roles; // 角色

  public User() {
  }

  public User(Long id, String username, String password, byte[] avatar) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.avatar = avatar;
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

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
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
    return isActive;
  }

  public void setActive(Boolean active) {
    isActive = active;
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

  @Override
  public String toString() {
    return "User{" +
      "id=" + id +
      ", username='" + username + '\'' +
      ", password='" + password + '\'' +
      ", firstName='" + firstName + '\'' +
      ", lastName='" + lastName + '\'' +
      ", email='" + email + '\'' +
      ", avatar=" + Arrays.toString(avatar) +
      ", isActive=" + isActive +
      ", state=" + state +
      ", lastDate=" + lastDate +
      ", createDate=" + createDate +
      ", roles=" + roles +
      '}';
  }
}
