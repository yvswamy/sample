import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { carbonComponents } from './app.routing';
import { EpmsalesExecsummaryComponent } from './epmsales-execsummary/epmsales-execsummary.component';
import { EpmsalesTilesummaryComponent } from './shared/epmsales-tilesummary/epmsales-tilesummary.component';
import { EpmsalesChartboardComponent } from './shared/epmsales-chartboard/epmsales-chartboard.component';
import { EpmsalesAggpipelineComponent } from './epmsales-aggpipeline/epmsales-aggpipeline.component';
import { EpmsalesSegpipelineComponent } from './epmsales-segpipeline/epmsales-segpipeline.component';
import { EpmsalesTransroadmapComponent } from './epmsales-transroadmap/epmsales-transroadmap.component';
import { EpmsalesTranskeydealsComponent } from './epmsales-transkeydeals/epmsales-transkeydeals.component';
import { EpmsalesProfilepageComponent } from './epmsales-profilepage/epmsales-profilepage.component';
import { EpmsalesBreadcrumbComponent } from './epmsales-breadcrumb/epmsales-breadcrumb.component';

@NgModule({
   declarations: [
      AppComponent,
      EpmsalesExecsummaryComponent,
      EpmsalesTilesummaryComponent,
      EpmsalesChartboardComponent,
      EpmsalesAggpipelineComponent,
      EpmsalesSegpipelineComponent,
      EpmsalesTransroadmapComponent,
      EpmsalesTranskeydealsComponent,
      EpmsalesProfilepageComponent,
      EpmsalesBreadcrumbComponent
   ],
   imports: [
      ...carbonComponents,
      FormsModule,
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
