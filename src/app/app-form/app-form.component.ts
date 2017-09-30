import { Component } from '@angular/core';

export class Phone {
  constructor(public title: string, public price: number, public company: string) {
  }
}

@Component({
  selector: 'app-form',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  templateUrl: 'app-form.component.html'
})

export class AppFormComponent {
  public phones: Phone[] = [];
  public companies: string[] = ['Apple', 'Huawei', 'Xiaomi', 'Samsung', 'LG', 'Motorola', 'Alcatel'];

  public addPhone(title: string, price: number, company: string) {
    this.phones.push(new Phone(title, price, company));
  }
}


