import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Data } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { ActivatedRouteStub } from '../testing/activated-route-stub';

describe('LoginComponent', () => {

    let activatedRoute: ActivatedRouteStub;
    let comp: LoginComponent;

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
        comp = new LoginComponent(<any> activatedRoute);
    });

    it ('should check for LoginComponent', () => {
        expect(comp instanceof LoginComponent)
                .toBe(true, 'should create LoginComponent');
    });

    it ('should run ngOnInit without failures', () => {
        activatedRoute.testQueryParams = {logout: 'logout', error: null};
        comp.ngOnInit();
    });
});
