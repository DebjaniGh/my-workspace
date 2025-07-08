import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() sections: { title: string; content: string; isOpen: boolean }[] = [];

  toggleSection(index: number) {
    this.sections = this.sections.map((section, currIndex) => ({
      ...section,
      isOpen: currIndex === index ? !section.isOpen : false,
    }));
  }
}
