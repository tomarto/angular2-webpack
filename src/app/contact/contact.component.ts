import { Component } from '@angular/core';

import { Contact } from './contact';

import { CONTACT_VALIDATION } from './contact-validation.constant';

@Component({
    moduleId: module.id + '',
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    public validation = CONTACT_VALIDATION;

    public contact: Contact = new Contact();

    public onSubmit() {
        console.log(JSON.stringify(this.contact));
    }
}
