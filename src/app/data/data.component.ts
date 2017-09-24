import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LogService } from '../log.service';
import { Phone } from '../phone';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})

export class DataComponent implements OnInit {

  items: Phone[] = [];
  constructor(private dataService: DataService) {}

  addItem(name: string, price: number) {
    this.dataService.addData(name, price);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
