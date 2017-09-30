import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ServiceComponent } from './service/service.component';
import { DataComponent } from './data/data.component';
import { LogService } from './log.service';
import { DataService } from './data.service';
import { AppPurchapseComponent } from './app-purchapse/app-purchapse.component';
import { AppBindingComponent } from './app-binding/app-binding.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildCompEventComponent } from './child-comp-event/child-comp-event.component';
import { PhoneComponent } from './phone/phone.component';
import { ChildEventBindingComponent } from './child-event-binding/child-event-binding.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { BoldHostListenerDirective } from './personal-directive/bold-host-listener.directive';
import { BoldHostBindingDirective } from './personal-directive/bold-host-binding.directive';
import { BoldDirective } from './personal-directive/font-input.directive';
import { AppHttpComponent } from './app-http/app-http.component';
import { HttpModule } from '@angular/http';
import { AppHttpObservableComponent } from './app-http-observable/app-http-observable.component';
import { AppDirectivesComponent } from './app-directives/app-directives.component';
import { AppStructuralDirectiveComponent } from './app-structural-directive/app-structural-directive.component';
import { WhileDirective } from './app-structural-directive/while.directive';
import { AppPipesComponent } from './app-pipes/app-pipes.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
