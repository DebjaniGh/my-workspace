import { Component } from '@angular/core';
//import { ButtonComponent, IconButtonComponent } from 'dg-ui-library';
import { btnType } from './model/btn.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { StarRatingComponent } from 'dg-ui-library';
import { AccordionComponent } from '../../../dg-ui-library/src/lib/organisms/accordion/accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    StarRatingComponent,
    AccordionComponent,
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

  sections = [
    {
      title: 'Section 1',
      content: 'Content 1',
      isOpen: false,
    },
    {
      title: 'Section 2',
      content: 'Content 2',
      isOpen: false,
    },
    {
      title: 'Section 3',
      content: 'Content 3',
      isOpen: false,
    },
    {
      title: 'Section 4',
      content: 'Content 4',
      isOpen: false,
    },
  ];

  imgLogo = './assets/images/bird_2.jpg';
  brandName = 'My Kart';

  constructor() {}
  onRatingChange(rating: number) {
    console.log('new Rating: ', rating);
  }
}
