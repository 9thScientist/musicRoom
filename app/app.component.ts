import {Song} from './song'
import {SongService} from './song.service';
import {Component, OnInit} from 'angular2/core';

@Component({
   selector: 'song-list',
   template: '\
   <div id="songs" class="col-md-3 col-sm-3">\
      <ul class="list-group songs-col">\
\
         <li *ngFor="#song of songs" class="list-group-item music-details">\
            <img class="album-min" src="images/{{song.albumCover}}"/>\
               <h5>{{song.name}}</h5>\
               <h6>{{song.artist}} - {{song.album}}</h6>\
         </li>\
      </ul>\
   </div>   ',
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
      console.log (this.songs)
   }
}
