import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../auth.service";
import { User } from "../user.model";
import { FormBuilder } from "@angular/forms";
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'user-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class UserChangeComponent implements OnInit {
  user: any;

  data: any;
  cropperSettings: CropperSettings;
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  avatar; // 头像
  username: string; // 用户名
  password: string; // 密码
  name: string; // 名字
  email: string; // 电子邮件
  active; // 是否有效
  state; // 是否为管理员
  createDate: Date; // 加入日期
  lastDate: Date; // 上次登录

  roles; // 角色
  selectedRoles = [];

  canvas = false;

  avatared;
  subscription: Subscription;

  changeForm;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.keepAspect = true;

    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.dynamicSizing = true;

    this.cropperSettings.canvasWidth = 150;
    this.cropperSettings.canvasHeight = 150;

    this.cropperSettings.minWidth = 100;
    this.cropperSettings.minHeight = 100;

    this.cropperSettings.rounded = false;
    this.cropperSettings.minWithRelativeToResolution = false;

    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 1;
    this.cropperSettings.noFileInput = true;

    this.data = {};

    this.authService.getRoles().subscribe(response => {
      this.roles = response;
    })

    this.changeForm = this.fb.group({
      username: [this.username],
      name: [this.name],
      email: [this.email],
      state: [this.state],
      active: [this.active],
      selectedRoles: [this.selectedRoles],
    });
    this.route.params.subscribe(params => {
      this.authService.getUserById(params['id']).subscribe(response => {
        this.user = response;
        this.avatar = response.avatar;
        this.username = response.username;
        this.password = response.password;
        this.name = response.name;
        this.email = response.email;
        this.state = response.state;
        this.active = response.active;
        this.createDate = response.createDate;
        this.lastDate = response.lastDate;
        this.selectedRoles = response.roles;
      })
    });
  }

  fileChangeListener($event) {
    this.canvas = true;
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);
  }

  uploadAvatar() {
    this.user.avatar = this.data.image.split(',')[1];
    this.authService.updateUser(this.user).subscribe(response => {
      this.avatar = response.avatar;
    })
    this.canvas = false;
    if (localStorage.getItem('currentUser') == this.user.username) {
      location.reload();
    }
  }

  cancelAvatar() {
    this.canvas = false;
    this.data.image = null;
  }

  onSubmit(user) {
    this.user.username = user.username;
    this.user.name = user.name;
    this.user.email = user.email;
    this.user.state = user.state;
    this.user.active = user.active;
    this.user.roles = user.selectedRoles;
    this.authService.updateUser(this.user).subscribe(response => {
      this.router.navigateByUrl(`/pages/auth/user`);
    })
  }


  deleteUser(id){
    this.authService.deleteUser(id).subscribe(response => {
      this.router.navigateByUrl(`/pages/auth/user`);
    })
  }



}
