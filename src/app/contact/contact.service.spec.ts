import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    HttpModule, Http, XHRBackend, Response, ResponseOptions, ResponseType
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { ErrorResponse } from '../testing/error-response';

import { ContactService } from './contact.service';
import { Contact } from './contact';

describe('ContactService (mockBackend)', () => {
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                ContactService,
                {
                    provide: XHRBackend,
                    useClass: MockBackend
                }
            ]
        })
        .compileComponents();
    }));

    it('can instantiate service when inject service',
            inject([ContactService], (service: ContactService) => {
        expect(service instanceof ContactService).toBe(true);
    }));

    it('can instantiate service with "new"', inject([Http], (http: Http) => {
        expect(http).not.toBeNull('http should be provided');
        let service = new ContactService(http);
        expect(service instanceof ContactService).toBe(true, 'new service should be ok');
    }));

    it('can provide the mockBackend as XHRBackend',
            inject([XHRBackend], (backend: MockBackend) => {
        expect(backend).not.toBeNull('backend should be provided');
    }));

    describe('when sendMessage', () => {
        let backend: MockBackend;
        let service: ContactService;
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new ContactService(http);
        }));

        it('should have expected return success message (then)', async(inject([], () => {
            let options = new ResponseOptions({status: 200, body: {data: 'Message sent'}});
            backend.connections.subscribe((c: MockConnection) =>
                    c.mockRespond(new Response(options)));

            service.sendMessage(new Contact())
                .then((result) => {
                    expect(result).toBe('Message sent', 'should have expected success message');
                });
        })));

        it('should have expected return error message (catch)', async(inject([], () => {
            let options = new ResponseOptions(
                    {type: ResponseType.Error, status: 500});
            backend.connections.subscribe((c: MockConnection) =>
                    c.mockError(new ErrorResponse(options)));

            service.sendMessage(new Contact())
                .catch((result) => {
                    expect(result.status).toBe(500, 'should have expected error message');
                });
        })));
    });
});
