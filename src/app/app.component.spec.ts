import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HeaderComponent, AppComponent, FooterComponent]
        });
    });

    it ('should create AppComponent', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true);
    });
});
