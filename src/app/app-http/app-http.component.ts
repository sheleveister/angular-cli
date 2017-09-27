import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
  selector: 'app-http',
  templateUrl: 'app-http.component.html',
  providers: [HttpService]
})

export class AppHttpComponent implements OnInit {
  public users: User[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData().subscribe((data: Response) => this.users = data.json());
  }
}
