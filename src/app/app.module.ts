import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ENV_PROVIDERS } from './environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { ContactService } from './contact/contact.service';

import { AppRoutingModule } from './app-routing.module';

import '../styles/styles.scss';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutUsComponent,
        ServicesComponent,
        ContactComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    providers: [
        ENV_PROVIDERS,
        ContactService
    ]
})
export class AppModule { }
