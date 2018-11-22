import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { carbonComponents } from './app.routing';
import { EpmsalesExecsummaryComponent } from './epmsales-execsummary/epmsales-execsummary.component';
import { EpmsalesTilesummaryComponent } from './shared/epmsales-tilesummary/epmsales-tilesummary.component';
import { EpmsalesChartboardComponent } from './shared/epmsales-chartboard/epmsales-chartboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EpmsalesExecsummaryComponent,
    EpmsalesTilesummaryComponent,
    EpmsalesChartboardComponent
  ],
  imports: [...carbonComponents, FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
