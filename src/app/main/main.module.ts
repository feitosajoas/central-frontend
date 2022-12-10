import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainRoutes } from './main.routing';
import { GamesComponent } from './games/games.component';
import { StartCardComponent } from './home/start-card/start-card.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutes
  ],
  declarations: [
    HomeComponent,
    GamesComponent,
    StartCardComponent
  ]
})
export class MainModule { }
