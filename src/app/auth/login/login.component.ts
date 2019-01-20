import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

declare var SlidingVerificationCode: any;
import $ from "jquery";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent extends NbLoginComponent implements OnInit {


  public inits = function () {
    var eles = ($('div:hidden').find('#captcha').length > 0) ? $('div:hidden').find('#captcha').get(0) : $('div').find('#captcha').get(0);
    SlidingVerificationCode.init(eles, function () {
      document.getElementById('msg').innerHTML = '验证成功！'
    }, function () {
      this.verify = false;
      document.getElementById('msg').innerHTML = '验证失败！'
    })
  }

  ngOnInit() {
    this.inits();
  }


  login() {
    if (document.getElementById('msg').innerHTML == '' || document.getElementById('msg').innerHTML == '验证失败！'|| document.getElementById('msg').innerHTML == '请先完成验证!') {
      document.getElementById('msg').innerHTML = '请先完成验证'
    } else {
      this.messages = ["登录成功，即将进入系统！"];
      setTimeout(() => {
        this.router.navigate(["/pages/dashboard"]);
      }, 3000);
    }

  }
}