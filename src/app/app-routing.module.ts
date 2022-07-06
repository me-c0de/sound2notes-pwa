import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PianoComponent} from "./piano/piano.component";
import {PlayMidiComponent} from "./play-midi/play-midi.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'piano', component: PianoComponent},
  {path: 'midi', component: PlayMidiComponent},
  {path: '', pathMatch: "prefix", redirectTo: '/home'}
  //{path: '**', component: HomeComponent}, // Wildcard maybe 404 NotFound?
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
