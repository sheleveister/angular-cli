import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-event-binding',
  template: `
    <input
      [(ngModel)]="userName"
      (ngModelChange)="onNameChange($event)"
    >
`
})

export class ChildEventBindingComponent {

  @Input() userName: string;

  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }
}
