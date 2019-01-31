package org.zxiat.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Jeremy on 2019/1/21.
 * 权限表
 */
@Entity
public class Permission {

  @Id
  @GeneratedValue
  private int id;
  private String name; // 权限名称
  private String remark; // 权限描述
  private String url; // 授权链接
  private String method; // 提交方式

  public Permission() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getRemark() {
    return remark;
  }

  public void setRemark(String remark) {
    this.remark = remark;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getMethod() {
    return method;
  }

  public void setMethod(String method) {
    this.method = method;
  }

  @Override
  public String toString() {
    return "Permission{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", remark='" + remark + '\'' +
      ", url='" + url + '\'' +
      ", method='" + method + '\'' +
      '}';
  }
}
