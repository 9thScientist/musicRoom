import {User} from './users/user';
import {UserService} from './users/user.service';
import {Component, OnInit} from 'angular2/core';

@Component ({
   selector: 'users-list',
   templateUrl: '/app/users/users.html',
   providers: [UserService]
})

export class UsersComponent {
   users: String[];

   constructor(private _userService: UserService) { }

   getUsers() {
      this.users = this._userService.getUsers();
      console.log(this.users);
   }

   ngOnInit() {
      this.getUsers();
   }


}
