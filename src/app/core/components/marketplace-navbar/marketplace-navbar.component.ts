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
  public isSidebarOpen: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartItemCount$ = this.cartService.getTotalItemCount();
    this.subTotal$ = this.cartService.getSubtotal();
  }

 
  onCartClick(): void {
    this.cartService.toggleCart(true); 
  }


  toggleSidebar(force?: boolean): void {
    if (typeof force === 'boolean') {
      this.isSidebarOpen = force;
    } else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
  
  onSearchChange(event: any): void {
    const query = event.target.value;
    console.log('Busca:', query); 
  }
}