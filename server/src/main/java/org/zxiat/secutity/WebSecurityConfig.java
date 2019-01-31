package org.zxiat.secutity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.zxiat.service.UserService;

/**
 * Created by Jeremy on 2019/1/21.
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private MyFilterSecurityInterceptor myFilterSecurityInterceptor;

  //@Bean 把实例化的对象转化成一个Bean，放在Ioc容器中，会和@Autowired配合到一起，把对象、属性、方法完美封装。
  @Bean
  UserDetailsService customUserService() {
    return new CustomUserService();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable();
    http.authorizeRequests()
      .antMatchers("/").permitAll()
      .anyRequest().authenticated() //任何请求,登录后可以访问

      .and()
      .logout()
      .logoutUrl("/api/logout")
      .logoutSuccessUrl("/login")

      .and()
      .addFilter(new JWTAuthenticationFilter(authenticationManager(),customUserService()));


    // 添加自定义的filter，处理用户登录的数据
    http.addFilterBefore(customAuthenticationFilter(),
      UsernamePasswordAuthenticationFilter.class);

    http.addFilterBefore(myFilterSecurityInterceptor, FilterSecurityInterceptor.class);
  }

  @Bean
  CustomAuthenticationFilter customAuthenticationFilter() throws Exception {
    CustomAuthenticationFilter filter = new CustomAuthenticationFilter();
    // 设置登录的URL
    filter.setFilterProcessesUrl("/api/login");

    //这句很关键，重用WebSecurityConfigurerAdapter配置的AuthenticationManager，不然要自己组装AuthenticationManager
    filter.setAuthenticationManager(authenticationManagerBean());
    return filter;
  }
}
