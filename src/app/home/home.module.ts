import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationsModule } from '../navigations/navigations.module';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';




@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NavigationsModule,
    RouterModule,
    AuthenticationModule
  ]
})
export class HomeModule { }
