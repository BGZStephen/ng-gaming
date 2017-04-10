import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  toggle: false;

  ngOnInit() {
  }

  toggleMenu() {
    if(screen.width > 768) {
      return {'visibility':'visible', 'opacity': '1'}
    } else if (this.toggle && (screen.width < 768)) {
      return {'visibility':'visible', 'opacity': '1'}
    } else {
      return {'visibility':'hidden', 'opacity': '0' }
    }
  }

}
