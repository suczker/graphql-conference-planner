import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ConferenceModule} from './conference/conference.module';
import {AppRoutingModule} from './app-routing.module';
import {TalkModule} from './talk/talk.module';
import {SpeakerModule} from './speaker/speaker.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {ManagementModule} from './management/management.module';
import {AppHeaderComponent} from 'app/app-header.component';
import {AppContainerComponent} from 'app/app-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ConferenceModule,
    TalkModule,
    SpeakerModule,
    AuthenticationModule,
    ManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
