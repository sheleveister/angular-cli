import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { LogService } from './log.service';
import { DataService } from './data.service';

import { PhoneComponent } from './phone/phone.component';
import { ServiceComponent } from './service/service.component';
import { DataComponent } from './data/data.component';
import { AppPurchapseComponent } from './app-purchapse/app-purchapse.component';
import { AppBindingComponent } from './app-binding/app-binding.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildCompEventComponent } from './child-comp-event/child-comp-event.component';
import { ChildEventBindingComponent } from './child-event-binding/child-event-binding.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { AppHttpComponent } from './app-http/app-http.component';
import { AppHttpObservableComponent } from './app-http-observable/app-http-observable.component';
import { BoldDirective } from './personal-directive/font-input.directive';
import { BoldHostListenerDirective } from './personal-directive/bold-host-listener.directive';
import { BoldHostBindingDirective } from './personal-directive/bold-host-binding.directive';
import { WhileDirective } from './app-structural-directive/while.directive';
import { AppDirectivesComponent } from './app-directives/app-directives.component';
import { AppStructuralDirectiveComponent } from './app-structural-directive/app-structural-directive.component';
import { AppPipesComponent } from './app-pipes/app-pipes.component';
import { AppItemComponent } from './app-item/app-item.component';
import { AppItemStatComponent } from './app-item/app-item.stat.component';
import { AppItemDetailsComponent } from './app-item/app-item.details.component';

const itemRoutes: Routes = [
  { path: 'details', component: AppItemDetailsComponent },
  { path: 'stat', component: AppItemStatComponent }
];

const appRoutes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'purchapse', component: AppPurchapseComponent },
  { path: 'data', component: DataComponent },
  { path: 'binding', component: AppBindingComponent },
  { path: 'lifecycle-hook', component: LifecycleHookComponent },
  { path: 'ng-class', component: NgClassComponent },
  { path: 'http', component: AppHttpComponent },
  { path: 'http-observable', component: AppHttpObservableComponent },
  { path: 'directives', component: AppDirectivesComponent },
  { path: 'structural-directives', component: AppStructuralDirectiveComponent },
  { path: 'pipes', component: AppPipesComponent },
  { path: 'item', component: AppItemComponent },
  { path: 'item/:id', component: AppItemComponent },
  { path: 'item/:id', component: AppItemComponent, children: itemRoutes },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    DataComponent,
    AppPurchapseComponent,
    AppBindingComponent,
    ChildCompComponent,
    ChildCompEventComponent,
    PhoneComponent,
    ChildEventBindingComponent,
    LifecycleHookComponent,
    TemplateRefVarComponent,
    ContentChildComponent,
    NgClassComponent,
    BoldHostListenerDirective,
    BoldHostBindingDirective,
    BoldDirective,
    AppHttpComponent,
    AppHttpObservableComponent,
    AppDirectivesComponent,
    AppStructuralDirectiveComponent,
    WhileDirective,
    AppPipesComponent,
    AppItemComponent,
    AppItemStatComponent,
    AppItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    DataService,
    LogService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
