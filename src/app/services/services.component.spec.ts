import { TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ServicesComponent]
        });
    });

    it ('should create ServicesComponent', () => {
        let fixture = TestBed.createComponent(ServicesComponent);
        expect(fixture.componentInstance instanceof ServicesComponent)
                .toBe(true, 'should create ServicesComponent');
    });
});
