import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child-comp.component.html'
})

export class ChildCompComponent {
  @Input() userName: string;
  __userAge: number;

  @Input()
  set userAge(age: number) {
    if (age < 0) {
      this.__userAge = 0;
    } else if (age > 100) {
      this.__userAge = 100;
    } else {
      this.__userAge = age;
    }
  }

  get userAge() {
    return this.__userAge;
  }
}
