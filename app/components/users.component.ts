import {UserService} from '../services/user.service';
import {Component, OnInit} from 'angular2/core';

@Component ({
   selector: 'users-list',
   templateUrl: '/app/templates/users.html',
   providers: [UserService]
})

export class UsersComponent {
   users: String[];

   constructor(private _userService: UserService) { }

   getUsers() {
      this.users = this._userService.getUsers();
   }

   ngOnInit() {
      this.getUsers();
   }
}
