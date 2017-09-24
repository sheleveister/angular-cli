import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService, LogService]
})

export class AppComponent {

  public name: string = 'Tom';
  public age: number = 24;

  public clicks: number = 0;
  onChanged(increased) {
    increased === true ? this.clicks++ : this.clicks--;
  }

}
