import { Component } from '@angular/core';
import {
  ButtonComponent,
  IconButtonComponent,
  SearchBarComponent,
} from 'dg-ui-library';
import { btnType } from './model/btn.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    IconButtonComponent,
    SearchBarComponent,
    CommonModule,
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
}
