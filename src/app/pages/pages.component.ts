import { Component } from '@angular/core';

import { ADMIN_MENU_ITEMS } from './admin-menu';
import { USER_MENU_ITEMS } from './user-menu';
import { AnalyticsService } from "../@core/utils/analytics.service";
import { OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu;

  constructor(private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.menu = ADMIN_MENU_ITEMS;
    // var username = localStorage.getItem('currentUser');
    // this.authService.getUserByUsername(username).subscribe(response => {
    //   if (response.roles[0].name == "ROLE_ADMIN") {
    //     this.menu = ADMIN_MENU_ITEMS;
    //   } else if (response.roles[0].name == "ROLE_USER") {
    //     this.menu = USER_MENU_ITEMS;
    //   }
    // });
  }

}
