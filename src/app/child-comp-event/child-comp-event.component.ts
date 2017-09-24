import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp-event',
  templateUrl: './child-comp-event.component.html'
})

export class ChildCompEventComponent {

  @Output()
  onChanged = new EventEmitter<boolean>();
  change(increased) {
    this.onChanged.emit(increased);
  }
}
