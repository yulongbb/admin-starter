package org.zxiat.secutity;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Jeremy on 2019/1/22.
 */
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {


  @Override
  public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
    if(request.getContentType().equals(MediaType.APPLICATION_JSON_UTF8_VALUE)
      ||request.getContentType().equals(MediaType.APPLICATION_JSON_VALUE)){

      ObjectMapper mapper = new ObjectMapper();
      UsernamePasswordAuthenticationToken authRequest = null;
      try (InputStream is = request.getInputStream()){
        AuthenticationBean authenticationBean = mapper.readValue(is,AuthenticationBean.class);
        authRequest = new UsernamePasswordAuthenticationToken(
          authenticationBean.getUsername(), authenticationBean.getPassword());
      }catch (IOException e) {
        e.printStackTrace();
        authRequest = new UsernamePasswordAuthenticationToken(
          "", "");
      }finally {
        setDetails(request, authRequest);
        return this.getAuthenticationManager().authenticate(authRequest);
      }
    } else {
      return super.attemptAuthentication(request, response);
    }
  }

  @Override
  protected void successfulAuthentication(HttpServletRequest req,
                                          HttpServletResponse res,
                                          FilterChain chain,
                                          Authentication auth) throws IOException, ServletException {
    // builder the token
    String token = null;
    try {

      token = Jwts.builder()
        .setSubject(auth.getName())
        .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 24 * 1000)) // 设置过期时间
        .signWith(SignatureAlgorithm.HS512, "spring-security-@Jwt!&Secret^#") //采用什么算法是可以自己选择的，不一定非要采用HS512
        .compact();
      res.addHeader("Authorization", "Bearer " + token);
      res.addHeader("access-control-expose-headers", "Authorization");

      ObjectMapper objectMapper = new ObjectMapper();
      res.setStatus(HttpStatus.OK.value());
      res.setContentType("application/json; charset=utf-8");
      Map<String,String> tokens = new HashMap<>();
      tokens.put("token",token);

      Map<String,Map<String,String>> data = new HashMap<>();
      data.put("data", tokens);


      objectMapper.writeValue(res.getWriter(), data);


    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
