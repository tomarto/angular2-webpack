import { TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContactComponent]
        });
    });

    it ('should create ContactComponent', () => {
        let fixture = TestBed.createComponent(ContactComponent);
        expect(fixture.componentInstance instanceof ContactComponent)
                .toBe(true, 'should create ContactComponent');
    });
});
