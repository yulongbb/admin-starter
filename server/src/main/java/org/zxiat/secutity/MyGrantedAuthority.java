package org.zxiat.secutity;

import org.springframework.security.core.GrantedAuthority;

/**
 * Created by Jeremy on 2019/1/21.
 */
public class MyGrantedAuthority implements GrantedAuthority {

  private String url;
  private String method;

  public MyGrantedAuthority(String url, String method) {
    this.url = url;
    this.method = method;
  }

  @Override
  public String getAuthority() {
    return this.url + ";" + this.method;
  }


  public String getPermissionUrl() {
    return this.url;
  }

  public String getMethod() {
    return method;
  }
}
