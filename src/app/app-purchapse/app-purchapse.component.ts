import { Component } from '@angular/core';

export class Item {
  public purchapse: string;
  public done: boolean;
  public price: number;

  constructor(purchapse: string, price: number) {
    this.purchapse = purchapse;
    this.done = false;
    this.price = price;
  }
}

@Component({
  selector: 'app-purchapse',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  templateUrl: 'app-purchapse.component.html'
})

export class AppPurchapseComponent {
  items: Item[] = [
    { purchapse: 'Хлеб', done: false, price: 15 },
    { purchapse: 'Масло', done: false, price: 60 },
    { purchapse: 'Картофель', done: true, price: 22 },
    { purchapse: 'Сыр', done: false, price: 310 },
  ];

  addItem(text: string, price: number): void {
    this.items.push(new Item(text, price));
  }
}
