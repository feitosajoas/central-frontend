import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {  path: "home", component: HomeComponent },
  {  path: "games", component: GamesComponent }
];

export const MainRoutes = RouterModule.forChild(routes);
