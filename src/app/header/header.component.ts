import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUrl: string;
  selectedValue:string="";

  constructor(private router: Router, private location: Location) {
    this.currentUrl = this.location.path();
    this.currentUrl = this.currentUrl.substring(1);
    this.selectedValue = this.currentUrl;
  }



  onOptionChange(event: Event) {
    const selectedOption = (event.target as HTMLInputElement).value
    this.router.navigate([selectedOption]);
    this.selectedValue = selectedOption
  }

}
