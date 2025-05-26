import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  @Input() logoPath: string = '';
  @Input() brandName: string = '';
}
