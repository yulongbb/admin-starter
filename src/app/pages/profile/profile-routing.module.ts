import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile.component";
import { NotificationComponent } from "./notification/notification.component";
import { OverviewComponent } from "./overview/overview.component";


const routes: Routes = [{
  path: '',
  component: ProfileComponent,
  children: [
    {
      path: 'notification',
      component: NotificationComponent,
    },
    {
      path: 'overview',
      component: OverviewComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }

