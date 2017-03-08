import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ActivatedRouteStub {

    private subject = new BehaviorSubject(this.testQueryParams);
    private queryParams = this.subject.asObservable();

    private _testQueryParams: {};

    get testQueryParams() {
        return this._testQueryParams;
    }

    set testQueryParams(params: {}) {
        this._testQueryParams = params;
        this.subject.next(params);
    }
}
