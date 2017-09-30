import { Component, OnInit } from '@angular/core';
import { User } from './users';
import { HttpService } from './http.servise';

@Component({
  selector: 'app-http-observable',
  templateUrl: 'app-http-observable.component.html',
  providers: [HttpService]
})

export class AppHttpObservableComponent implements OnInit {
  users: User[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => this.users = data);
  }
}
