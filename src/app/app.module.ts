import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {PianoComponent} from './piano/piano.component';
import {PlayMidiComponent} from './play-midi/play-midi.component';
import {NgxFileDropModule} from "ngx-file-drop";
import {CommonModule} from "@angular/common";
import {AudioUploadComponent} from "./upload/audio-upload/audio-upload.component";
import {SafeUrlPipe} from "./safe-url.pipe";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {APIInterceptor} from "./helper/interceptor/APIInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PianoComponent,
    PlayMidiComponent,
    AudioUploadComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    NgxFileDropModule,
  ],
  providers: [
    {provide: "BASE_API_URL", useValue: environment.apiUrl},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true} // https://stackoverflow.com/a/49757625
  ],
  exports: [
    PianoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
