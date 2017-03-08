import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Contact } from './contact';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

describe('ContactComponent', () => {

    let comp: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let contactService: ContactService;

    let spy: jasmine.Spy;

    const testQuote = 'Success';
    const contact: Contact = new Contact('Test');

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContactComponent],
            imports: [FormsModule, HttpModule],
            providers: [ContactService]
        });

        fixture = TestBed.createComponent(ContactComponent);
        comp = fixture.componentInstance;

        contactService = fixture.debugElement.injector.get(ContactService);
    });

    it ('should create ContactComponent', () => {
        expect(fixture.componentInstance instanceof ContactComponent)
                .toBe(true, 'should create ContactComponent');
    });

    it ('should send a message successfully', () => {
        spy = spyOn(contactService, 'sendMessage')
                .and.returnValue(Promise.resolve('Success'));
        comp.contact = contact;
        comp.onSubmit();
        expect(contactService.sendMessage).toHaveBeenCalledWith(contact);
    });

    it ('should return error when sending message', () => {
        spy = spyOn(contactService, 'sendMessage')
                .and.returnValue(Promise.reject('Error'));
        comp.contact = contact;
        comp.onSubmit();
        expect(contactService.sendMessage).toHaveBeenCalledWith(contact);
    });
});
