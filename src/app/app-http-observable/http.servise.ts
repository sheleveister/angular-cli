import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './users';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  constructor (private http: Http) {}

  getUsers(): Observable<User[]> {
    return this.http.get('/assets/users-observable.json')
      .map((resp: Response) => {
        const usersList = resp.json().data;
        const users: User[] = [];

        for (let i in usersList) {
          console.log(usersList[i]);
          const user = usersList[i];
          users.push({name: user.userName, age: user.userAge});
        }
        return users;
      });
  }
}
