import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { Dragons } from './data-dragons.model';
import { Animals } from './data-animals.model';
import { ToolsService } from './tools.service';

import { AppComponent } from './app.component';
import { ListComponent } from './items/list/list.component';
import { DetailsComponent } from './items/details/details.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    HeaderComponent,
    AboutComponent,
    ItemsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    ToolsService,
    Dragons,
    Animals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
