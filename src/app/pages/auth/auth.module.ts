import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageUploadModule } from "angular2-image-upload";
import { NgSelectModule } from '@ng-select/ng-select';


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
import { RoleComponent } from './role/role.component';
import { AuthService } from "./auth.service";
import { AgGridModule } from 'ag-grid-angular';
import { UserChangeComponent } from './user/change/change.component';
import { UserAddComponent } from './user/add/add.component';
import { ImageCropperModule } from "ng2-img-cropper";
import { RoleChangeComponent } from './role/change/change.component';

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
    NgSelectModule,
    ImageCropperModule,
    ImageUploadModule.forRoot(),
    ThemeModule.forRoot(),
    AgGridModule.withComponents([])

  ],
  declarations: [
    AuthComponent,
    UserComponent,
    RoleComponent,
    UserChangeComponent,
    UserAddComponent,
    RoleChangeComponent,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}