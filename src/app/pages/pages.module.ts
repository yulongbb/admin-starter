import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProfileModule } from "./profile/profile.module";
import { ReferenceComponent } from './reference/reference.component';
import { ExampleComponent } from './example/example.component';
import { SettingModule } from "./setting/setting.module";
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/auth.service";

const PAGES_COMPONENTS = [
  PagesComponent,
  ReferenceComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    ProfileModule,
    SettingModule,
    AuthModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ExampleComponent,
  ],
  entryComponents: [
    ReferenceComponent,
  ], 
  providers: [
    AuthService
  ]
})
export class PagesModule {
}
