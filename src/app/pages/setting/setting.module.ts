import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SettingRoutingModule } from "./setting-routing.module";
import { ProfileSettingComponent } from "./profile-setting/profile-setting.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { NotificationSettingComponent } from "./notification-setting/notification-setting.component";
import { SettingComponent } from "./setting.component";


@NgModule({
    imports: [
        ThemeModule,
        SettingRoutingModule,
    ],
    declarations: [
        SettingComponent,
        ProfileSettingComponent,
        AccountSettingComponent,
        NotificationSettingComponent,
    ],
})
export class SettingModule { }
