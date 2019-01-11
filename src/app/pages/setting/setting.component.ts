import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  subMenu: NbMenuItem[] = [
    {
      title: '基础信息',
      link: '/pages/setting/profile',
    },
    {
      title: '账户设置',
      link: '/pages/setting/account',
    },
    {
      title: '通知',
      link: '/pages/setting/notification',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
