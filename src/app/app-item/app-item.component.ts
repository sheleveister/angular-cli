import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'item-info',
  templateUrl: './app-item.component.html'
})

export class AppItemComponent implements OnDestroy {
  public id: number;
  public routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
