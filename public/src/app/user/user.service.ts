import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = '/users';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>(this.url);
  }
  getUser(id: number) {
    return this.http.get<User[]>(`${this.url}/${id}`);
  }
  create(user: User) {
    return this.http.post<User>(this.url, user);
  }
  destroy(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(user: User) {
    return this.http.put<User>(`${this.url}/${user._id}`, user);
  }
}
