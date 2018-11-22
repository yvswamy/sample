import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { carbonCoponents } from './app.routing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...carbonCoponents,
    FormsModule,
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
