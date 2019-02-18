import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SettingRoutingModule } from "./setting-routing.module";
import { ProfileSettingComponent } from "./profile/profile.component";
import { AccountSettingComponent } from "./account/account.component";
import { NotificationSettingComponent } from "./notification/notification.component";
import { SettingComponent } from "./setting.component";
import { SystemSettingComponent } from './system/system.component';


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
        SystemSettingComponent,
    ],
})
export class SettingModule { }
