import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToolsService } from '../tools.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private itemOfTheDay;
  private siteName;

  constructor(
    private dataService: DataService,
    private tools: ToolsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.dataService.initialise();
    this.itemOfTheDay = this.tools.getItemOfTheDay();
    this.siteName = this.dataService.baseUrl;

    // Remove trailing 's' if there is one
    this.siteName = this.siteName.slice(this.siteName.length-1) === 's' ? this.siteName.slice(0, this.siteName.length-1) : this.siteName;
    // Capitilise first char
    this.siteName = this.siteName.slice(0, 1).toUpperCase() + this.siteName.slice(1, this.siteName.length);
  }

  /** rather than navigate to desired page through the url, use click to
   * send us to the required page, and save the target page in the data service
   * w'ell pick it up when the list component is initilised
   */
  onDOTDClick() {
    this.dataService.activeItem = this.itemOfTheDay.index;
    this.router.navigate([this.dataService.baseUrl + '/' + this.dataService.baseUrl]);
  }

  ngOnDestroy() {
    // kill the service when we navigate to another page
    // this.myService.unsubscribe();
  }
}
