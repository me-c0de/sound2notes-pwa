import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMidiComponent } from './play-midi.component';

describe('PlayMidiComponent', () => {
  let component: PlayMidiComponent;
  let fixture: ComponentFixture<PlayMidiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayMidiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayMidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
