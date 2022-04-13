import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { TrendingCoursesComponent } from './trending-courses/trending-courses.component';
import { NavigationsModule } from '../navigations/navigations.module';

@NgModule({
  declarations: [
    DashboardComponent,
    StatsCardComponent,
    MyCoursesComponent,
    TrendingCoursesComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavigationsModule,
    RouterModule,
  ],
})
export class DashboardModule {}
