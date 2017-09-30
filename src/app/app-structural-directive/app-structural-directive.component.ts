import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: 'app-structural-directive.component.html'
})

export class AppStructuralDirectiveComponent {
  public condition: boolean = false;

  public toggle() {
    this.condition = !this.condition;
  }
}
