import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutes
  ]
})
export class AuthModule { }
