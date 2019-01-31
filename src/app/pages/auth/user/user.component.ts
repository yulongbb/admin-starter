import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  title = 'app';

  image;



  columnDefs = [
    { headerName: '用户名', field: 'username', sortable: true, filter: true, resizable: false },
    { headerName: '密码', field: 'password', sortable: true, filter: true, resizable: false },
    { headerName: '名字', field: 'firstName', sortable: true, filter: true, resizable: false },
    { headerName: '姓氏', field: 'lastName', sortable: true, filter: true, resizable: false },
    // { headerName: '头像', field: 'avatar', sortable: true, filter: true, resizable: false, cellRenderer: this.customCellRendererFunc },
    { headerName: '有效', field: 'isActive', sortable: true, filter: true, resizable: false },
    { headerName: '状态', field: 'state', sortable: true, filter: true, resizable: false },
    { headerName: '角色', field: 'roles.0.name', sortable: true, filter: true, resizable: false },
    { headerName: '上次登录', field: 'lastDate', sortable: true, filter: true, resizable: false },
  ];


  rowData = [];

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.authService.getUsers().subscribe(response => {
      this.rowData = response;
    })
  }


  // public customCellRendererFunc(params): string {
  //   let blob = new Blob([params.value], { type: "image/jpeg" });
  //   this.image = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
  //   return `<img src="${window.URL.createObjectURL(blob)}">`;
  // }



}
