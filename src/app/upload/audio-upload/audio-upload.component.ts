import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {FileSystemFileEntry, NgxFileDropEntry} from "ngx-file-drop";
import {AudioUploadService} from "../../audio/audio-upload.service";

@Component({
  selector: 'audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.scss']
})
export class AudioUploadComponent {

  file: any;
  duration: number = 0;
  audio: any;

  public files: { link: string, entry: NgxFileDropEntry }[] = [];

  @Output("File") newFileEvent = new EventEmitter<File>;


  @ViewChild('audioElement') audioElement: ElementRef | undefined;


  constructor(private uploadService: AudioUploadService) {
  }

  public dropped(files: NgxFileDropEntry[]): void {
    this.files = files.map((file) => {
        return {
          link: '',
          entry: file
        };
      }
    )

    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry

        fileEntry.file((file: File) => {
          console.log("Dropped:", droppedFile.relativePath, file);
        });

      }

    }

  }

  handleFileInput(target: any[]) {
    // @ts-ignore
    if (target) {
      // @ts-ignore
      //let files = target.fileEntry;

      target[0].fileEntry.file((file: File) => {

        console.log()
        // @ts-ignore
        let audio = new Audio(URL.createObjectURL(file));
        // @ts-ignore
        this.audio = URL.createObjectURL(file);
        this.audioElement?.nativeElement.load();
        audio.onloadedmetadata = (e: any) => {
          this.duration = e.currentTarget.duration;
        }

        this.newFileEvent.emit(file);
        this.file = file;
        if (!this.file) {
          this.duration = -1;
          return;
        }

      });

    }


  }

  getAudio(file: { link: string; entry: NgxFileDropEntry }) {
    if (file.link) return file.link;

    const fileEntry = file.entry.fileEntry as FileSystemFileEntry
    let link = "";

    fileEntry.file((realFile: File) => {
      //audio = new Audio(URL.createObjectURL(file));
      link = URL.createObjectURL(realFile);
      file.link = link;

    });
    return link;

  }

  Upload(file: { link: string; entry: NgxFileDropEntry }) {
    const fileEntry = file.entry.fileEntry as FileSystemFileEntry
    fileEntry.file((file: File) => {

      this.uploadService.add({
        file
      }).subscribe(res => console.log(res));

    });
  }
}
