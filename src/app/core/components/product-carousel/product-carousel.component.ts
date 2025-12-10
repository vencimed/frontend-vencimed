import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Product } from '../../services/cart.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent {

  @Input() title: string = '';
  @Input() products: Product[] = [];
  @Input() defaultSlideSize: number = 4; // quantos cards por "página"

  @Output() addToCart = new EventEmitter<{ id: string, quantity: number }>();

  public slideIndex = 0;
  public currentSlideSize: number = 4;

  ngOnInit(): void {
    // Calcula o tamanho inicial ao carregar a página
    this.updateResponsiveConfig();
  }

  // Escuta mudanças no tamanho da tela
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateResponsiveConfig();
  }

  updateResponsiveConfig() {
    const width = window.innerWidth;
    console.log('Largura da janela:', width);

    if (width < 654) {
      this.currentSlideSize = 1; // Celular: 1 produto por vez (foco total)
    } else if (width < 926) {
      this.currentSlideSize = 2; // Tablet: 2 produtos
    } else if (width < 1280) {
      this.currentSlideSize = 3; // Laptops menores: 3 produtos
    } else {
      this.currentSlideSize = this.defaultSlideSize; // Desktop grande: 4 produtos
    }

    // Segurança: se o slideIndex atual for maior que o novo total de slides, volta para o começo
    // Isso evita tela em branco ao redimensionar
    if (this.slideIndex >= this.totalSlides) {
      this.slideIndex = 0;
    }
  }

  get totalSlides(): number {
    return Math.max(1, Math.ceil(this.products.length / this.currentSlideSize));
  }

  get slides(): number[] {
    return Array.from({ length: this.totalSlides }, (_, i) => i);
  }

  get visibleProducts(): Product[] {
    const start = this.slideIndex * this.currentSlideSize;
    return this.products.slice(start, start + this.currentSlideSize);
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
    // Loop infinito (opcional): se chegar no fim, volta pro começo
    if (this.slideIndex >= this.totalSlides - 1) {
      this.slideIndex = 0;
    } else {
      this.goToSlide(this.slideIndex + 1);
    }
  }

  prev(): void {
    // Loop infinito reverso
    if (this.slideIndex <= 0) {
      this.slideIndex = this.totalSlides - 1;
    } else {
      this.goToSlide(this.slideIndex - 1);
    }
  }

  handleAddToCart(event: { id: string, quantity: number }): void {
    this.addToCart.emit(event);
  }
}
