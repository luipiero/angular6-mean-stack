import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [
    // new User(1, 'jose', 'alcatara', 'jose@gmail.com'),
    // new User(2, 'jose', 'alcatara', 'jose@gmail.com'),
    // new User(3, 'jose', 'alcatara', 'jose@gmail.com')
  ];

  constructor(public userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  create(newUser: User) {

    this.userService.create(newUser)
      .subscribe(status => this.getUsers());

    // cuanso se usa arrays
    // this.users.push(newUser);
  }

  destroy(user: User) {

    this.userService.destroy(user._id)
      .subscribe(status => this.getUsers());
    //  const i = this.users.indexOf(user);
    //    this.users.splice(i, 1);

  }

  update(user) {
    this.userService.update(user)
      .subscribe(status => this.getUsers());

    // cuanso se usa arrays
    // const i = this.users.indexOf(user.original);
    // this.users[i] = user.edited;
  }

}
