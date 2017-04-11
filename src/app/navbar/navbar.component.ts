import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  toggle = false;

  ngOnInit() {
  }

  toggleMenuResize() {
    if (screen.width < 768) {
      this.toggleMenu("resize")
    }
  }

  toggleMenu(resize?) {
    if (resize && screen.width < 768) {
      return {'visibility':'hidden', 'opacity': '0'}
    } else if (this.toggle == false && screen.width > 768) {
      return {'visibility':'visible', 'opacity': '1'}
    } else if (this.toggle) {
      return {'visibility':'visible', 'opacity': '1'}
    } else {
      return {'visibility':'hidden', 'opacity': '0'}
    }
  }

}
