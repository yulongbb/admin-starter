import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProfileRoutingModule } from "./profile-routing.module";
import { NotificationComponent } from "./notification/notification.component";
import { ProfileComponent } from "./profile.component";
import { OverviewComponent } from './overview/overview.component';
import { AuthService } from "../auth/auth.service";

@NgModule({
    imports: [
        ThemeModule,
        ProfileRoutingModule,
    ],
    declarations: [
        ProfileComponent,
        NotificationComponent,
        OverviewComponent,
    ],
    providers: [
        AuthService
    ]
})
export class ProfileModule { }
