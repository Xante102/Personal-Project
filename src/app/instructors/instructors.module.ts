import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsRoutingModule } from './instructors-routing.module';
import { InstructorsComponent } from './instructors.component';
import { InstructorsCardComponent } from './instructors-card/instructors-card.component';
import { NavigationsModule } from '../navigations/navigations.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InstructorsComponent, InstructorsCardComponent],
  imports: [
    CommonModule,
    InstructorsRoutingModule,
    NavigationsModule,
    RouterModule,
  ],
})
export class InstructorsModule {}
