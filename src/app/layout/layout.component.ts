import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { CartService } from '../core/services/cart.service'; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  
  public isCartOpen$!: Observable<boolean>;

  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    
    this.isCartOpen$ = this.cartService.isCartOpen$;
  }

  
  onCloseDrawer(): void {
    this.cartService.toggleCart(false);
  }
}