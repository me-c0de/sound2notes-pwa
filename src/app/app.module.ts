import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {UploadModule} from "./upload/upload.module";
import { PianoComponent } from './piano/piano.component';
import { PlayMidiComponent } from './play-midi/play-midi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PianoComponent,
    PlayMidiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule,
  ],
  providers: [],
  exports: [
    PianoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
