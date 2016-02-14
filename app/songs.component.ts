import {Song} from './songs/song';
import {SongService} from './songs/song.service';
import {Component, OnInit} from 'angular2/core';

@Component({
   selector: 'song-list',
   templateUrl: '/app/songs/songs.html',
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
