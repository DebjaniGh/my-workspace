import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'lib-horizontal-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './horizontal-nav.component.html',
  styleUrl: './horizontal-nav.component.css',
})
export class HorizontalNavComponent {
  @Input() navItems: NavItem[] = [];
  @Input() activeRoute: string | null = null; // to determine the current active route
}
