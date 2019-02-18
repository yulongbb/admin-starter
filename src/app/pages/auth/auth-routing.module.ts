import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbAuthComponent } from '@nebular/auth';
import { AuthComponent } from "./auth.component";
import { UserComponent } from "./user/user.component";
import { RoleComponent } from "./role/role.component";
import { UserChangeComponent } from "./user/change/change.component";
import { UserAddComponent } from "./user/add/add.component";
import { RoleChangeComponent } from "./role/change/change.component";

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
                path: 'user/add',
                component: UserAddComponent, // <---
            },
            {
                path: 'user/:id/change',
                component: UserChangeComponent, // <---
            },
            {
                path: 'role',
                component: RoleComponent, // <---
            },
            {
                path: 'role/:id/change',
                component: RoleChangeComponent, // <---
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