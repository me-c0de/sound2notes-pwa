import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioUploadComponent } from './audio-upload/audio-upload.component';
import {SafeUrlPipe} from "../safe-url.pipe";



@NgModule({
  declarations: [
    AudioUploadComponent,
    SafeUrlPipe
  ],
  exports: [
    AudioUploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UploadModule { }
