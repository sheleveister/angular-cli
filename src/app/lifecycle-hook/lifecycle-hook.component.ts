import {
  Component, Input,
  OnInit, DoCheck, OnChanges, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  } from '@angular/core';

@Component({
  selector: 'lifecycle-hook',
  template: `<p>Привет {{name}}</p>`
})

export class LifecycleHookComponent implements OnInit, DoCheck, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() name: string;
  public count: number = 1;

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  private log(msg: string) {
    console.log(this.count + '. ' + msg);
    this.count++;
  }

}
