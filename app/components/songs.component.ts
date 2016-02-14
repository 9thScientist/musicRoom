import {Song} from '../interfaces/song';
import {SongService} from '../services/song.service';
import {Component, OnInit} from 'angular2/core';

@Component({
   selector: 'song-list',
   templateUrl: '/app/templates/songs.html',
   providers: [SongService]
})

export class AppComponent {
   songs: Song[];

   constructor(private _songService: SongService) { }

   getSongs() {
      this.songs = this._songService.getSongs();
   }

   ngOnInit() {
      this.getSongs();
   }
}
