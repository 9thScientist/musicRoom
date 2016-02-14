import {SONGS} from '../mock-songs';
import {Injectable} from 'angular2/core';

@Injectable()
export class SongService {
   getSongs() {
      return SONGS;
   }
}
