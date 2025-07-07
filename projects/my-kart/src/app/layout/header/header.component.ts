import { filter } from 'rxjs';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  HorizontalNavComponent,
  LogoComponent,
  NavItem,
  SearchBarComponent,
} from 'dg-ui-library';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, SearchBarComponent, HorizontalNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Contact Us', route: '/contact' },
    { label: 'Sign Up', route: '/signup' },
  ];

  currentRoute = '';

  constructor(private router: Router) {
    // this.router.events
    //   .pipe(filter((event: any) => event instanceof NavigationEnd))
    //   .subscribe((event: NavigationEnd) => {
    //     this.currentRoute = event.urlAfterRedirects;
    //   });
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }
}
