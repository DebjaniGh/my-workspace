import { Component } from '@angular/core';
//import { ButtonComponent, IconButtonComponent } from 'dg-ui-library';
import { btnType } from './model/btn.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { StarRatingComponent } from 'dg-ui-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, StarRatingComponent],
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

  constructor() {}
  onRatingChange(rating: number) {
    console.log('new Rating: ', rating);
  }
}
