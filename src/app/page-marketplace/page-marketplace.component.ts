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
  
  public categoryIcons: { [key: string]: string } = {
    'Em oferta': '/assets/icones/em-oferta.svg',
    'Medicamentos e Saúde': '/assets/icones/medicamentos-e-saude.svg',
    'Vitaminas': '/assets/icones/vitaminas.svg',
    'Suplementos': '/assets/icones/suplementos.svg',
    'Pele e Beleza': '/assets/icones/pele-e-beleza.svg',
    'Mamães e Bebês': '/assets/icones/mamaes-e-bebes.svg',
    'Higiene Pessoal': '/assets/icones/higiene-pessoal.svg',
  };
  
  public selectedCategory: string | null = null;
  
    // DICAS DO MARQUEE
  tips = [
    {
      icon: '/assets/icones/cupons.svg',
      alt: 'Cupons',
      title: 'Cupons Exclusivos',
      subtitle: 'Garanta já o seu!'
    },
    {
      icon: '/assets/icones/promocoes.svg',
      alt: 'Promoções',
      title: 'Promoções imperdíveis',
      subtitle: 'Economize na VenciMed'
    },
    {
      icon: '/assets/icones/loja.svg',
      alt: 'Loja',
      title: 'Retire na Loja',
      subtitle: 'Em até 30 minutos'
    },
    {
      icon: '/assets/icones/pix.svg',
      alt: 'Pix',
      title: 'Pague Fácil',
      subtitle: 'Com Pix'
    }
  ];

  // quantas cópias do bloco você quer no “trilho”
  repeats = [0, 1]; // 2 vezes
  
  public bestSellerProducts: Product[] = [];
  public dealsTodayProducts: Product[] = [];
  public mostSearchedProducts: Product[] = []; 
  public skinCareProducts: Product[] = [];  
  public personalCareProducts: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.allProducts = this.cartService.getProducts();
    this.categories = this.cartService.getCategories();

    const bestSellerIds = ['9', '10', '11', '12'];
    this.bestSellerProducts = this.allProducts.filter(p =>
      bestSellerIds.includes(p.id)
    );

    const DEALS_TODAY_IDS = ['13', '14', '15', '16'];
    this.dealsTodayProducts = this.allProducts.filter(p => DEALS_TODAY_IDS.includes(p.id));

    const MOST_SEARCHED_IDS = ['17', '18', '19', '20']; 
    this.mostSearchedProducts = this.allProducts.filter(p =>
      MOST_SEARCHED_IDS.includes(p.id)
    );

    const SKIN_CARE_IDS = ['21', '22', '23', '24'];
    this.skinCareProducts = this.allProducts.filter(p =>
      SKIN_CARE_IDS.includes(p.id)
    );

    const PERSONAL_CARE_IDS = ['25', '26', '27', '28'];   
    this.personalCareProducts = this.allProducts.filter(p =>
      PERSONAL_CARE_IDS.includes(p.id)
    );
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


  onSearchChange(event: any): void {
    const query = event.target.value;
    console.log('Busca:', query); 
  }
}