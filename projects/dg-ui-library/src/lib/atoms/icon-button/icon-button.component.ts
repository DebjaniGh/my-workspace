import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css',
})
export class IconButtonComponent {
  @Input() icon: string = '';
  @Input() type?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' =
    'primary';
  @Input() label?: string | number = '';
  @Input() disabled: boolean = false;
}
