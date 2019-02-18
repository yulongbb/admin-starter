import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from "./setting.component";
import { ProfileSettingComponent } from "./profile/profile.component";
import { AccountSettingComponent } from "./account/account.component";
import { NotificationSettingComponent } from "./notification/notification.component";



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

