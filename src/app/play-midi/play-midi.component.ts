import {Component, OnInit} from '@angular/core';
import {Midi} from "@tonejs/midi";
import * as Tone from 'tone';


@Component({
  selector: 'app-play-midi',
  templateUrl: './play-midi.component.html',
  styleUrls: ['./play-midi.component.scss']
})
export class PlayMidiComponent implements OnInit {

  ngOnInit(): void {

  }

  async Start(midi: Midi): Promise<void> {
    // load a midi file in the browser
    //const midi = await Midi.fromUrl("~src/assets/demo.mid")

    //const midi = new Midi(file)
    //the file name decoded from the first track
    const name = midi.name
    //get the tracks
    //synth playback
    const synths = []
    const now = Tone.now() + 0.5
    midi.tracks.forEach(track => {

      //create a synth for each track
      // @ts-ignore
      /*      const synth = new Tone.PolySynth(10, Tone.Synth, {
              envelope: {
                attack: 0.02,
                decay: 0.1,
                sustain: 0.3,
                release: 1
              }
            }).toMaster()*/
      const synth = new Tone.PolySynth().toDestination();
      synth.set({
        envelope: {
          attack: 0.02,
          decay: 0.1,
          sustain: 0.5,
          release: 1
        }
      })
      synths.push(synth)
      //schedule all of the events
      track.notes.forEach(note => {
        synth.triggerAttackRelease(note.name, note.duration, note.time + now, note.velocity)
      })
    })
  }

  OnAudioUpload($event: any) {
    const reader = new FileReader();

    reader.onload = (e) => {
      // @ts-ignore
      const midi = new Midi(e.target.result);
      this.Start(midi);
    }
    reader.readAsArrayBuffer($event);

  }
}
