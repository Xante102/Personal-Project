import { HomePageComponent } from './home/home-page/home-page.component';
import { InstructorsModule } from './instructors/instructors.module';
import { WebinarsModule } from './webinars/webinars.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationsModule } from './navigations/navigations.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationsModule,
    FormsModule,
    AuthenticationModule,
    DashboardModule,
    CoursesModule,
    StudentsModule,
    WebinarsModule,
    InstructorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
