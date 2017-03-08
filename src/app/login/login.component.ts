import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { LOGIN_VALIDATION } from './login-validation.constant';

@Component({
    moduleId: module.id + '',
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public validation = LOGIN_VALIDATION;
    public hasLoggedOut: boolean = false;
    public hasError: boolean = false;
    public user: string;
    public pass: string;

    constructor(private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.route.queryParams.subscribe((params: Params) => {
            this.hasLoggedOut = params['logout'] != null;
            this.hasError = params['error'] != null;
        });
    }
}
