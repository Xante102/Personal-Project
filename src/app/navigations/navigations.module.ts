import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesModule } from '../courses/courses.module';
import { PageFooterComponent } from './page-footer/page-footer.component';

@NgModule({
  declarations: [NavbarComponent, PageFooterComponent],
  imports: [CommonModule, CoursesModule],

  exports: [NavbarComponent, PageFooterComponent],
})
export class NavigationsModule {}
