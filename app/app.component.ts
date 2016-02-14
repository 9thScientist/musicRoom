import {Component} from 'angular2/core';

interface Song {
   name: string;
   artist: string;
   albumCover: string;
   album: string;
}

var SONGS : Song[] = [
    {"name": "Atom Heart Mother", "artist": "Pink Floyd", "albumCover": "ahm.jpg", "album": "Atom Heart Mother"},
    {"name": "Stairway", "artist": "Led Zeppelin", "albumCover": "mothership.jpg", "album": "Mothership"},
    {"name": "Under Pressure", "artist": "Queen" , "albumCover": "hotspace.jpg", "album": "Hot Space"},
    {"name": "Snap Out of It", "artist": "Arctic Monkeys", "albumCover": "am.png", "album": "AM"}
]

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
   </div>   '
})

export class AppComponent {
   public songs = SONGS;

}
