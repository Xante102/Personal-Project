import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsCardComponent } from './students-card/students-card.component';
import { NavigationsModule } from '../navigations/navigations.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StudentsComponent, StudentsCardComponent],
  imports: [CommonModule, StudentsRoutingModule, NavigationsModule,  RouterModule,],
})
export class StudentsModule {}
