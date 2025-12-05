import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../services/cart.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent {

  @Input() title: string = '';
  @Input() products: Product[] = [];
  @Input() slideSize: number = 4; // quantos cards por "página"

  @Output() addToCart = new EventEmitter<{ id: string, quantity: number }>();

  public slideIndex = 0;

  get totalSlides(): number {
    return Math.max(1, Math.ceil(this.products.length / this.slideSize));
  }

  get slides(): number[] {
    return Array.from({ length: this.totalSlides }, (_, i) => i);
  }

  get visibleProducts(): Product[] {
    const start = this.slideIndex * this.slideSize;
    return this.products.slice(start, start + this.slideSize);
  }

  goToSlide(index: number): void {
    if (index < 0) {
      this.slideIndex = 0;
    } else if (index > this.totalSlides - 1) {
      this.slideIndex = this.totalSlides - 1;
    } else {
      this.slideIndex = index;
    }
  }

  next(): void {
    this.goToSlide(this.slideIndex + 1);
  }

  prev(): void {
    this.goToSlide(this.slideIndex - 1);
  }

  handleAddToCart(event: { id: string, quantity: number }): void {
    this.addToCart.emit(event);
  }
}
