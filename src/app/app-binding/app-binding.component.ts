import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './app-binding.component.html'
})

export class AppBindingComponent {
  public name: string = 'Tom';
  public age: number = 25;

  public count: number = 0;
  increase($event): void {
    this.count++;
    console.log($event);
  }
}
