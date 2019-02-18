import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  avatar; // 用户头像
  firstName: string;
  lastName: string;

  base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
  'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
  'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='

  tabs: any[] = [
    {
      title: '概览',
      route: '/pages/profile/overview',
    },
    {
      title: '通知',
      route: '/pages/profile/notification',
    }
  ];



  constructor(private authService: AuthService,
  ) { }

  ngOnInit() {
    var username = localStorage.getItem('currentUser')
    this.authService.getUserByUsername(username).subscribe(response => {
      this.avatar = response.avatar;
      this.firstName = response.firstName;
      this.lastName = response.lastName;
      console.log(response);
    })
  

  }

}
