System.register(['./song.service', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var song_service_1, core_1;
    var AppComponent;
    return {
        setters:[
            function (song_service_1_1) {
                song_service_1 = song_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_songService) {
                    this._songService = _songService;
                }
                AppComponent.prototype.getSongs = function () {
                    this.songs = this._songService.getSongs();
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getSongs();
                    console.log(this.songs);
                };
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
   </div>   ',
                        providers: [song_service_1.SongService]
                    }), 
                    __metadata('design:paramtypes', [song_service_1.SongService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map