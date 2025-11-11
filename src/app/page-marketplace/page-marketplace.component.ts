import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../core/services/cart.service'; 

@Component({
  selector: 'app-page-marketplace',
  templateUrl: './page-marketplace.component.html',
  styleUrls: ['./page-marketplace.component.css']
})
export class PageMarketplaceComponent implements OnInit {

  
  public allProducts: Product[] = []; 
  public categories: string[] = [];   

  
  public selectedCategory: string | null = null;
  
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    
    this.allProducts = this.cartService.getProducts();
    this.categories = this.cartService.getCategories();
  }

  
  

  public get filteredProducts(): Product[] {
    if (this.selectedCategory) {
      return this.allProducts.filter(p => p.category === this.selectedCategory);
    }
    
    return this.allProducts;
  }
  
  
  selectCategory(category: string): void {
    if (this.selectedCategory === category) {
      
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category;
    }
  }

  
  
  onAddToCart(event: { id: string, quantity: number }): void {
    this.cartService.addToCart(event.id, event.quantity);
  }
}