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
      this.siteNameCaps = this.siteName[0].toUpperCase() + this.siteName.slice(1);
      // Remove trailing 's' if there is one
      this.siteNameCaps = this.siteNameCaps.slice(this.siteNameCaps.length-1) === 's' ? this.siteNameCaps.slice(0, this.siteNameCaps.length-1) : this.siteNameCaps;      
      clearInterval(this.timer);
    }, 50);

  }

}
