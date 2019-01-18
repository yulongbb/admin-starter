import { Component } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent extends NbAuthComponent {
}