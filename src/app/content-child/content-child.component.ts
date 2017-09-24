import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  template: `
    <ng-content></ng-content>
    <button (click)="change()">Изменить</button>
  `
})

export class ContentChildComponent {
  @ContentChild('headerContent') header: string;

  change() {
    console.log(this.header);
  }
}
