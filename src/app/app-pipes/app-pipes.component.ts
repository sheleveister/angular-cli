import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: 'app-pipes.component.html'
})

export class AppPipesComponent {
  public welcome: string = 'Hello world!';
  public percentage: number = 0.14;
  public Date: number = Date.now();
  public pi: number = 3.1415;
}
