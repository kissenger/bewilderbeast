
// DEFINES THE FRONT-END (CLIENT-SIDE) ROUTES

import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DragonsComponent } from './dragons/dragons.component';
import { AboutComponent } from './about/about.component';


// **named routes must be named different to any back-end routes defined
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dragons', component: DragonsComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
