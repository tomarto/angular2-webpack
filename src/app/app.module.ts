import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import '../styles/styles.scss';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        NgbModule.forRoot()
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS
    ]
})
export class AppModule {

}
