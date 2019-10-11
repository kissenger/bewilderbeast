import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public siteName;
  public siteNameCaps;
  public timer;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {


    // use setinterval to poll siteName until it is set
    this.timer = setInterval( () => {
      this.siteName = this.dataService.baseUrl;
      if ( this.siteName === 'undefined' ) { return false; }
      this.siteNameCaps = this.siteName[0].toUpperCase() + this.siteName.slice(1);
      clearInterval(this.timer);
    }, 200);

  }

}
