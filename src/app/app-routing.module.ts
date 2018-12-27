import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpmsalesProfilepageComponent } from './epmsales-profilepage/epmsales-profilepage.component';
import { EpmsalesExecsummaryComponent } from './epmsales-execsummary/epmsales-execsummary.component';
import { EpmsalesAggpipelineComponent } from './epmsales-aggpipeline/epmsales-aggpipeline.component';
import { EpmsalesSegpipelineComponent } from './epmsales-segpipeline/epmsales-segpipeline.component';
import { EpmsalesTransroadmapComponent } from './epmsales-transroadmap/epmsales-transroadmap.component';
import { EpmsalesTranskeydealsComponent } from './epmsales-transkeydeals/epmsales-transkeydeals.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: EpmsalesProfilepageComponent, canActivate: [AuthGuardService] },
  { path: 'executive-summary', component: EpmsalesExecsummaryComponent },
  { path: 'aggregated-pipeline', component: EpmsalesAggpipelineComponent },
  { path: 'segmented-pipeline', component: EpmsalesSegpipelineComponent },
  { path: 'transactional-pipeline', component: EpmsalesTransroadmapComponent },
  { path: 'transactional-keydeals', component: EpmsalesTranskeydealsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
