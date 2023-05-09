import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CardsGroupComponent } from './components/cards-group/cards-group.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PrincipalComponent,
    CardsGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
