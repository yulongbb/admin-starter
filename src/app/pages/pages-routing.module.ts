import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from "./setting/setting.component";
import { ExampleComponent } from "./example/example.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    { path: 'profile', loadChildren: 'app/pages/profile/profile.module#ProfileModule' },
    { path: 'miscellaneous', loadChildren: 'app/pages/miscellaneous/miscellaneous.module#MiscellaneousModule' },
    { path: 'setting', loadChildren: 'app/pages/setting/setting.module#SettingModule' },
    {
      path: 'example',
      component: ExampleComponent,
    },
    { path: 'auth', loadChildren: 'app/pages/auth/auth.module#AuthModule' },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
