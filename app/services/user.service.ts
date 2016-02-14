import {USERS} from '../mock-users';
import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
   getUsers() {
      return USERS;
   }
}
