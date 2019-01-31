import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbAuthComponent } from '@nebular/auth';
import { AuthComponent } from "./auth.component";
import { UserComponent } from "./user/user.component";
import { GroupComponent } from "./group/group.component";

export const routes: Routes = [
    // .. here goes our components routes
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'user',
                component: UserComponent, // <---
            },
            {
                path: 'group',
                component: GroupComponent, // <---
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}