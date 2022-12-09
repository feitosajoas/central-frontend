import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainRoutes } from './main.routing';
import { GamesComponent } from './games/games.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutes
  ],
  declarations: [
    HomeComponent,
    GamesComponent
  ]
})
export class MainModule { }
