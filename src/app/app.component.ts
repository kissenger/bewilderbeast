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
  private timer;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.timer = setInterval( () => {
      if ( this.router.url === '/' ) { this.showHeader = false; }
      console.log(this.router.url);
      clearInterval(this.timer);
    }, 100);
    // if ( this.router.url === '/' ) { this.showHeader = false; }
    // console.log(this.router.url);
  }

}


