package org.zxiat.secutity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.zxiat.entity.Permission;
import org.zxiat.entity.Role;
import org.zxiat.entity.User;
import org.zxiat.dao.UserRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Jeremy on 2019/1/21.
 */
@Service
public class CustomUserService implements UserDetailsService {

  @Autowired
  UserRepository userRepository;


  public UserDetails loadUserByUsername(String username) {
    User user = userRepository.findByUsername(username);
    if (user == null) {
      throw new UsernameNotFoundException("admin: " + username + " do not exist!");
    }
    List<Role> roles = user.getRoles();
    if (roles == null || roles.size() == 0) {
      throw new UsernameNotFoundException("admin: " + username + " do not exist!");
    }
    List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
    //用于添加用户的权限。
    for (Role role : roles) {
      List<Permission> permissions = role.getPermissions();
      for (Permission permission : permissions) {
        if (permission != null && permission.getName() != null) {
          GrantedAuthority grantedAuthority = new MyGrantedAuthority(permission.getUrl(), permission.getMethod());
          //1：此处将权限信息添加到 GrantedAuthority 对象中，在后面进行全权限验证时会使用GrantedAuthority 对象。
          grantedAuthorities.add(grantedAuthority);
        }
      }
    }
    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), grantedAuthorities);
  }
}


