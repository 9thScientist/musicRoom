System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SONGS, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SONGS = [
                { "name": "Atom Heart Mother", "artist": "Pink Floyd", "albumCover": "ahm.jpg", "album": "Atom Heart Mother" },
                { "name": "Stairway", "artist": "Led Zeppelin", "albumCover": "mothership.jpg", "album": "Mothership" },
                { "name": "Under Pressure", "artist": "Queen", "albumCover": "hotspace.jpg", "album": "Hot Space" },
                { "name": "Snap Out of It", "artist": "Arctic Monkeys", "albumCover": "am.png", "album": "AM" }
            ];
            AppComponent = (function () {
                function AppComponent() {
                    this.songs = SONGS;
                }
                AppComponent = __decorate([
                    core_1.Component({
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
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map