import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';

import '../styles/styles.css';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS
    ]
})
export class AppModule {

}
