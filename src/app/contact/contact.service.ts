import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

@Injectable()
export class ContactService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    public sendMessage(contact: Contact): Promise<string> {
        return this.http
                .post('api/email', JSON.stringify(contact), {headers: this.headers})
                .toPromise()
                .then((response) => response.json().data)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('ERROR:');
        console.log(error);
        return Promise.reject(error.message || error);
    }
}
