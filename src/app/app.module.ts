import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { Dragons } from './dragons.model';
import { ToolsService } from './tools.service';

import { AppComponent } from './app.component';
import { ListComponent } from './dragons/list/list.component';
import { DetailsComponent } from './dragons/details/details.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { DragonsComponent } from './dragons/dragons.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    HeaderComponent,
    AboutComponent,
    DragonsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    ToolsService,
    Dragons
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
