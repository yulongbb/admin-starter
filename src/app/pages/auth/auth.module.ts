import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { AuthComponent } from "./auth.component";
import { ThemeModule } from "../../@theme/theme.module";
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { AuthService } from "./auth.service";
import { AgGridModule } from 'ag-grid-angular';
import { UserChangeComponent } from './user/change/change.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule,
    ThemeModule.forRoot(),
    AgGridModule.withComponents([])

  ],
  declarations: [
    AuthComponent,
    UserComponent,
    GroupComponent,
    UserChangeComponent,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}