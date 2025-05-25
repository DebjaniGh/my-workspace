import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() placeholder: string = '';
}
