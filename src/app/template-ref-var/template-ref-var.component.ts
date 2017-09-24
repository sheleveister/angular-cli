import { Component } from '@angular/core';

@Component({
  selector: 'template-ref-var',
  template: '<p>{{counter}}</p>'
})

export class TemplateRefVarComponent {
  public counter: number = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
