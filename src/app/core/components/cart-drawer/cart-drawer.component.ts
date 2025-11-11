import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.css']
})
export class CartDrawerComponent implements OnInit {

  // --- Observables para "ouvir" o estado do serviço ---
  public cartItems$!: Observable<CartItem[]>;
  public subtotal$!: Observable<number>;
  public totalItems$!: Observable<number>;

  public isEmpty: boolean = true;
  
  // O <select> precisa de um array de números
  public quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Ligamos os nossos Observables aos do serviço
    this.cartItems$ = this.cartService.cartItems$;
    this.subtotal$ = this.cartService.getSubtotal();
    this.totalItems$ = this.cartService.getTotalItemCount();

    // Subscrevemos para saber se o carrinho está vazio (para o *ngIf)
    this.cartItems$.subscribe(items => {
      this.isEmpty = items.length === 0;
    });
  }

  // --- Funções que VÃO CHAMAR o serviço ---

  // (Substituto do "onUpdateQuantity")
  onUpdateQuantity(id: string, event: any): void {
    const quantity = parseInt(event.value, 10);
    this.cartService.updateQuantity(id, quantity);
  }

  // (Substituto do "onRemoveItem")
  onRemoveItem(id: string): void {
    this.cartService.removeItem(id);
  }

  // (Substituto do "onGoToCart")
  onGoToCart(): void {
    this.cartService.toggleCart(false); // Fecha o drawer
    // O teu React tinha um "alert". Vamos usar o Toastr para ser mais elegante
    // this.toastr.info('Navegando para página de checkout...', 'Aviso');
    alert('Navegando para página de checkout...');
  }
  
  onClose(): void {
    this.cartService.toggleCart(false); // Diz ao serviço para fechar
  }
}