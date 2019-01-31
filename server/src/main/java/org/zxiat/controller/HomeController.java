package org.zxiat.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Jeremy on 2019/1/22.
 */
@RestController
public class HomeController {

  @GetMapping({"/index"})
  public String root(){
    return "index";
  }

  @GetMapping({"/resource"})
  public String resource(){
    return "resource";
  }
}
