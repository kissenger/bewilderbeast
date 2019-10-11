import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private title = 'Dragons or Animals?';
  private showHeader = true;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    
    // if ( this.router.url === '/' ) { this.showHeader = false; }
    // console.log(this.dataService.baseUrl);
  }

}


