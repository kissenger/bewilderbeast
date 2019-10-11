import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Dragons or Animals?';

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

  }

}


