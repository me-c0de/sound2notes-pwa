import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.css']
})
export class AudioUploadComponent {

  file: File | undefined;
  duration: number = 0;
  audio: any;


  @ViewChild('audioElement') audioElement: ElementRef | undefined;

  handleFileInput(target: EventTarget | null) {
    // @ts-ignore
    if (target.files) {
      // @ts-ignore
      let files = target.files;
      this.file = files[0];
      if (!this.file) {
        this.duration = -1;
        return;
      }
      let audio = new Audio(URL.createObjectURL(this.file));
      this.audio = URL.createObjectURL(this.file);
      this.audioElement?.nativeElement.load();
      audio.onloadedmetadata = (e: any) => {
        this.duration = e.currentTarget.duration;
      }
    }

  }
}
