import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from "./setting.component";
import { ProfileSettingComponent } from "./profile-setting/profile-setting.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { NotificationSettingComponent } from "./notification-setting/notification-setting.component";



const routes: Routes = [{
  path: '',
  component: SettingComponent,
  children: [
    {
      path: 'profile',
      component: ProfileSettingComponent,
    },
    {
      path: 'account',
      component: AccountSettingComponent,
    },
    {
      path: 'notification',
      component: NotificationSettingComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule { }

