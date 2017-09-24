import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { DataService } from '../data.service';

@Component({
  selector: 'phone',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  templateUrl: 'phone.component.html'
})

export class PhoneComponent implements OnInit {
  public items: Phone[] = [];

  constructor(private dataService: DataService) {}

  public addItem(name: string, price: number) {
    this.dataService.addData(name, price);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
