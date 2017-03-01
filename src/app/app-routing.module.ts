import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: 'conocenos',
        component: AboutUsComponent
    },
    {
        path: 'servicios',
        component: ServicesComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule { }
