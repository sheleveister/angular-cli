import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: 'app-directives.component.html'
})

export class AppDirectivesComponent {

  public condition: boolean = true;
  public thenCondition: boolean = true;
  public conditionUnset: boolean = true;
  public count: number = 5;

  public items: string[] = ['Apple iPhone 7', 'Huawei Mate 9', 'Samsung Galaxy S7', 'Motorola Moto Z'];

  public toggle() {
    this.condition = !this.condition;
  }

  public toggleUnset() {
    this.conditionUnset = !this.conditionUnset;
  }

  public toggleThenCondition() {
    this.thenCondition = !this.thenCondition;
  }
}
