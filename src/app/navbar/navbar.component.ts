import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closeNavbarOnClick() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      navbarToggler.click();  // This will collapse the navbar
    }
  }
}
