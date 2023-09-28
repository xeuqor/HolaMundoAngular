import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
