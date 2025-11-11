import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../core/services/cart.service'; // Importamos o serviço E a interface Product

@Component({
  selector: 'app-page-marketplace',
  templateUrl: './page-marketplace.component.html',
  styleUrls: ['./page-marketplace.component.css']
})
export class PageMarketplaceComponent implements OnInit {

  // --- Listas de Dados ---
  public allProducts: Product[] = []; // A nossa lista de produtos
  public categories: string[] = [];   // A nossa lista de categorias

  // --- Estado (Substituto do useState) ---
  public selectedCategory: string | null = null;
  
  // Injetamos o nosso serviço
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Quando o componente carrega, pedimos os dados ao serviço
    this.allProducts = this.cartService.getProducts();
    this.categories = this.cartService.getCategories();
  }

  // --- Lógica de Filtro (Substituto do "filteredProducts") ---
  // Um "getter" em TypeScript é uma função que se parece com uma variável.
  // O HTML vai ler "filteredProducts" e esta função será executada.
  public get filteredProducts(): Product[] {
    if (this.selectedCategory) {
      return this.allProducts.filter(p => p.category === this.selectedCategory);
    }
    // Se nenhuma categoria estiver selecionada, retorna todos
    return this.allProducts;
  }
  
  // --- Funções de Evento ---

  // (Substituto do "onClick" do CategoryChip)
  selectCategory(category: string): void {
    if (this.selectedCategory === category) {
      // Se clicar na mesma categoria, limpa o filtro
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category;
    }
  }

  // (Substituto do "onAddToCart" do ProductCard)
  // Recebe o evento do componente filho (product-card)
  onAddToCart(event: { id: string, quantity: number }): void {
    this.cartService.addToCart(event.id, event.quantity);
  }
}