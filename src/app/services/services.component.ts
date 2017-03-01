import { Component } from '@angular/core';

import { RowService } from './RowService';
import { ROW_SERVICES } from './services-data';

@Component({
    moduleId: module.id + '',
    selector: 'services',
    templateUrl: './services.component.html',
    styleUrls: [ './services.component.css' ]
})
export class ServicesComponent {
    public rows: RowService[] = ROW_SERVICES;
}
