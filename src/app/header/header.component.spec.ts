import { TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        });
    });

    it ('should create HeaderComponent', () => {
        let fixture = TestBed.createComponent(HeaderComponent);
        expect(fixture.componentInstance instanceof HeaderComponent)
                .toBe(true, 'should create HeaderComponent');
    });
});
