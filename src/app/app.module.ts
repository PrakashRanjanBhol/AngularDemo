import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { App2SharedModule } from 'projects/app2/src/app/app.module';
import { NavComponent } from './nav/nav.component';
import { MessageComponent } from './message/message.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [MessageComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MessageComponent, { injector });
    if (!customElements.get('app-message')) {
    customElements.define('app-message', customElement);
    }
}

ngDoBootstrap() {

}
 }
