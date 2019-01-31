package org.zxiat.secutity;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by USER-20160507EI on 2018/5/24.
 */
public class JWTAuthenticationFilter extends BasicAuthenticationFilter {

  private static final Logger logger = LoggerFactory.getLogger(JWTAuthenticationFilter.class);

  private UserDetailsService customUserService;


  public JWTAuthenticationFilter(AuthenticationManager authenticationManager, UserDetailsService customUserService) {
    super(authenticationManager);
    this.customUserService = customUserService;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
    System.out.println("Enter JWT Filter");

    String header = request.getHeader("Authorization");
//    if (header == null || !header.startsWith("Bearer ")) {
//      chain.doFilter(request, response);
//      return;
//    }
    UsernamePasswordAuthenticationToken authentication = getAuthentication(request);
    SecurityContextHolder.getContext().setAuthentication(authentication);
    chain.doFilter(request, response);
  }

  private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
    System.out.println("Enter token");

    String token = request.getHeader("Authorization");
    System.out.println(token);
    if (token != null) {
      // parse the token.
      String username = Jwts.parser()
        .setSigningKey("spring-security-@Jwt!&Secret^#")
        .parseClaimsJws(token.replace("Bearer ", ""))
        .getBody()
        .getSubject();
      if (username != null) {
        UserDetails userDetails = customUserService.loadUserByUsername(username);
        return new UsernamePasswordAuthenticationToken(username, userDetails.getAuthorities(), userDetails.getAuthorities());
      }

    }
    return null;
  }

}
