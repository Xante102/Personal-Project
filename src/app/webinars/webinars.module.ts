import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebinarsRoutingModule } from './webinars-routing.module';
import { WebinarsComponent } from './webinars.component';
import { WebinarsCardComponent } from './webinars-card/webinars-card.component';
import { NavigationsModule } from '../navigations/navigations.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WebinarsComponent,
    WebinarsCardComponent
  ],
  imports: [
    CommonModule,
    WebinarsRoutingModule,
    NavigationsModule,
    RouterModule,
  ]
})
export class WebinarsModule { }
