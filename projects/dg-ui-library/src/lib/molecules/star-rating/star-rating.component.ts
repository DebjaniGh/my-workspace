import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent implements OnInit {
  @Input() maxStars = 5;
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  stars: boolean[] = [];

  ngOnInit() {
    this.updateStars();
  }

  updateStars() {
    this.stars = Array(this.maxStars)
      .fill(false)
      .map((_, i) => i < this.rating);
  }

  // when a star is clicked, set the current rating
  setRating(index: number) {
    this.rating = index + 1;
    this.updateStars();
    this.ratingChange.emit(this.rating);
  }

  // when user hovers over the stars
  onHover(index: number) {
    this.stars = this.stars.map((_, i) => i <= index);
  }

  // when user stops hovering over the stars
  resetStars() {
    this.updateStars();
  }
}
