import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { LikeIconComponent } from './like-icon/like-icon.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    CoursesComponent,
    CoursesCardComponent,
    CartIconComponent,
    LikeIconComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule,
  ],
  exports: [
    CartIconComponent,
    LikeIconComponent,
  ]
})
export class CoursesModule { }
