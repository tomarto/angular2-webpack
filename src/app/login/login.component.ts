import { Component } from '@angular/core';

import { LOGIN_VALIDATION } from './login-validation.constant';

@Component({
    moduleId: module.id + '',
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public validation = LOGIN_VALIDATION;
}
