import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-marketplace-navbar', 
  templateUrl: './marketplace-navbar.component.html',
  styleUrls: ['./marketplace-navbar.component.css']
})
export class MarketplaceNavbarComponent implements OnInit {


  public cartItemCount$!: Observable<number>;
  public subTotal$!: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartItemCount$ = this.cartService.getTotalItemCount();
    this.subTotal$ = this.cartService.getSubtotal();
  }

 
  onCartClick(): void {
    this.cartService.toggleCart(true); 
  }


  onSearchChange(event: any): void {
    const query = event.target.value;
    console.log('Busca:', query); 
  }
}