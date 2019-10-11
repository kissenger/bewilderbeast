
// DEFINES THE FRONT-END (CLIENT-SIDE) ROUTES

import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './notfound/notfound.component';


// **named routes must be named different to any back-end routes defined
const appRoutes: Routes = [
  { path: '', component: NotFoundComponent},
  // { path: 'home', component: HomeComponent},
  // { path: 'dragons', component: DragonsComponent},
  // { path: 'dragons/:dragonIndex', component: DragonsComponent},
  // { path: 'about', component: AboutComponent},
  { path: 'dragons', component: HomeComponent},
  { path: 'animals', component: HomeComponent},
  { path: 'dragons/home', component: HomeComponent},
  { path: 'dragons/dragons', component: ItemsComponent},
  { path: 'dragons/about', component: AboutComponent},
  { path: 'animals/home', component: HomeComponent},
  { path: 'animals/animals', component: ItemsComponent},
  { path: 'animals/about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
