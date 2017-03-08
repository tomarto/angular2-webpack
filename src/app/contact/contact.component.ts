import { Component } from '@angular/core';

import { Contact } from './contact';
import { ContactService } from './contact.service';
import { CONTACT_VALIDATION } from './contact-validation.constant';

@Component({
    moduleId: module.id + '',
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    public validation = CONTACT_VALIDATION;
    public contact: Contact = new Contact();

    constructor(private contactService: ContactService) { }

    public onSubmit() {
        this.contactService.sendMessage(this.contact)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
    }
}
