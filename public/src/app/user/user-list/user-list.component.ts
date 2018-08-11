import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();
  selectUser: User;
  mostrar: boolean;

  constructor() {
    this.mostrar = false;

  }

  ngOnInit() {

  }
  destroy(user: User) {
    const response = confirm('delete?');
    if (response) {
      this.destroyUserEvent.emit(user);
    }
  }

  update(user: User) {
    this.updateUserEvent.emit(user);
    user.editable = !user.editable;
    this.mostrar = false;
  }

  onSelectUser(user: User) {
    console.log(user);
    this.selectUser = user;
    user.editable = !user.editable;
    this.mostrar = !this.mostrar;

  }
}
