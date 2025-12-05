import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.css']
})
export class CartDrawerComponent implements OnInit {

  
  public cartItems$!: Observable<CartItem[]>;
  public subtotal$!: Observable<number>;
  public totalItems$!: Observable<number>;

  public isEmpty: boolean = true;
  
  
  public quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    
    this.cartItems$ = this.cartService.cartItems$;
    this.subtotal$ = this.cartService.getSubtotal();
    this.totalItems$ = this.cartService.getTotalItemCount();

    
    this.cartItems$.subscribe(items => {
      this.isEmpty = items.length === 0;
    });
  }

  
  onIncreaseQuantity(id: string): void {
    this.cartService.addQuantity(id);
  }

  onDecreaseQuantity(id: string): void {
    this.cartService.removeQuantity(id);
  }
  
  onUpdateQuantity(id: string, event: any): void {
    const quantity = parseInt(event.value, 10);
    this.cartService.updateQuantity(id, quantity);
  }

  
  onRemoveItem(id: string): void {
    this.cartService.removeItem(id);
  }

  
  onGoToCart(): void {
    this.cartService.toggleCart(false); 
    
    
    alert('Navegando para página de checkout...');
  }
  
  onClose(): void {
    this.cartService.toggleCart(false); 
  }
}