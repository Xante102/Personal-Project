import { RegisterComponent } from './authentication/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './home/home-page/home-page.component';
import { WebinarsComponent } from './webinars/webinars.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'students',
    component: StudentsComponent,
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'instructors',
    component: InstructorsComponent,
    loadChildren: () =>
      import('./instructors/instructors.module').then(
        (m) => m.InstructorsModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'webinars',
    component: WebinarsComponent,
    loadChildren: () =>
      import('./webinars/webinars.module').then((m) => m.WebinarsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
