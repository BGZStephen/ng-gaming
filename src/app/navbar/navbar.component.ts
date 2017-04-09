import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  toggle: true;

  ngOnInit() {
  }

  toggleMenu() {
    if(this.toggle) {
      return {'visibility':'visible', 'opacity': '1'}
    } else {
      return {'visibility':'hidden', 'opacity': '0'}
    }
  }

}
