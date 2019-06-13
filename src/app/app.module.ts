import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MessengerComponent } from './components/messenger/messenger.component';
import { MessageComponent } from './components/messenger/message/message.component';
import { MessageFormComponent } from './components/messenger/message-form/message-form.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LoadingIndicatorComponent } from './components/load-indicator/loading-indicator.component';
import { ScrollHandlerDirective } from './directives/scroll-handler.directive';


@NgModule({
    declarations: [
        AppComponent,
        LoadingIndicatorComponent,
        MessengerComponent,
        MessageComponent,
        MessageFormComponent,
        SignInComponent,
        ScrollHandlerDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
