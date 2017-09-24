import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})

export class NgClassComponent {
  public visibility: boolean = false;

  toggle() {
    this.visibility = !this.visibility;
  }
}
