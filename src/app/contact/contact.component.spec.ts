import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

import { ContactService } from './contact.service';

describe('ContactComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContactComponent],
            imports: [FormsModule, HttpModule],
            providers: [ContactService]
        });
    });

    it ('should create ContactComponent', () => {
        let fixture = TestBed.createComponent(ContactComponent);
        expect(fixture.componentInstance instanceof ContactComponent)
                .toBe(true, 'should create ContactComponent');
    });
});
