import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  // --- @Inputs (as "props" do React) ---
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() brand: string = '';
  @Input() image: string = '';
  @Input() originalPrice: number = 0;
  @Input() discountPrice: number = 0;
  @Input() expiryDays: number = 0;
  @Input() stock: number = 0;
  @Input() rating?: number;

  // --- @Output (o "onAddToCart" do React) ---
  @Output() addToCart = new EventEmitter<{ id: string, quantity: number }>();

  // --- State (os "useState" do React) ---
  public quantity: number = 0;
  public isHovered: boolean = false;
  public discount: number = 0;

  // --- @HostListener (para o hover do desktop) ---
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }

  // --- ngOnInit (o "construtor" do componente) ---
  ngOnInit() {
    // Calcula a percentagem de desconto
    if (this.originalPrice > 0) {
      this.discount = Math.round(
        ((this.originalPrice - this.discountPrice) / this.originalPrice) * 100
      );
    }
  }

  // --- Funções (a lógica do React) ---

  handleAdd(): void {
    if (this.quantity === 0) {
      this.quantity = 1;
      this.addToCart.emit({ id: this.id, quantity: 1 });
    } else {
      const newQty = this.quantity + 1;
      this.quantity = newQty;
      this.addToCart.emit({ id: this.id, quantity: newQty });
    }
  }

  handleSubtract(): void {
    if (this.quantity > 0) {
      const newQty = this.quantity - 1;
      this.quantity = newQty;
      this.addToCart.emit({ id: this.id, quantity: newQty });
    }
  }
}