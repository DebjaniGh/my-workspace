import { Component } from '@angular/core';
import {
  ButtonComponent,
  IconButtonComponent,
  SearchBarComponent,
  LogoComponent,
  NavItem,
} from 'dg-ui-library';
import { btnType } from './model/btn.interface';
import { CommonModule } from '@angular/common';
import { HorizontalNavComponent } from '../../../dg-ui-library/src/lib/organisms/horizontal-nav/horizontal-nav.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    IconButtonComponent,
    SearchBarComponent,
    CommonModule,
    LogoComponent,
    HorizontalNavComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-kart';

  buttonArr: btnType[] = [
    { label: 'Click me', type: 'button', variant: 'primary' },
    { label: 'Click me', type: 'button', variant: 'secondary' },
    { label: 'Click me', type: 'button', variant: 'outline' },
  ];

  imgLogo = './assets/images/bird_2.jpg';
  brandName = 'My Kart';
  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Contact Us', route: '/contact' },
    { label: 'Sign Up', route: '/signup' },
  ];

  currentRoute = '';
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }
}
