import { Component, OnInit } from '@angular/core';
import { NbLoginComponent, NbAuthService, NbAuthResult } from '@nebular/auth';


import { ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";

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
      document.getElementById('msg').innerHTML = '验证失败！'
    })
  }

  ngOnInit() {
    this.inits();
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
    if (document.getElementById('msg').innerHTML == '' || document.getElementById('msg').innerHTML == '验证失败！' || document.getElementById('msg').innerHTML == '请先完成验证!') {
      document.getElementById('msg').innerHTML = '请先完成验证'
      this.submitted = false;
    } else {
      this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
        this.submitted = false;

        if (result.isSuccess()) {
          this.messages = ['登录成功！即将进入系统'];
          localStorage.setItem('currentUser', this.user.username);
        } else {
          this.errors = ["用户名或密码有误"];
        }
        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(() => {
            return this.router.navigateByUrl('pages/dashboard');
          }, this.redirectDelay);
        }
        this.cd.detectChanges();
      });
    }

  }

}