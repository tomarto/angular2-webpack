import { TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AboutUsComponent]
        });
    });

    it ('should create AboutUsComponent', () => {
        let fixture = TestBed.createComponent(AboutUsComponent);
        expect(fixture.componentInstance instanceof AboutUsComponent)
                .toBe(true, 'should create AboutUsComponent');
    });
});
