import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs'; // Importa o 'map'
import { ToastrService } from 'ngx-toastr';

// --- INTERFACE (MODEL) DO PRODUTO ---
// (Como pediste, dentro do mesmo ficheiro)
export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  expiryDays: number;
  stock: number;
  rating?: number;
  category: string;
}

// --- INTERFACE (MODEL) DO CARRINHO ---
export interface CartItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  quantity: number;
}

// --- DADOS "MOCK" ---
// (Como pediste, dentro do mesmo ficheiro)
export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Paracetamol 750mg - Caixa com 20 comprimidos',
    brand: 'Genérico EMS',
    image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?w=400',
    originalPrice: 28.90,
    discountPrice: 14.45,
    expiryDays: 15,
    stock: 145,
    rating: 4.8,
    category: 'Analgésicos'
  },
  {
    id: '2',
    name: 'Vitamina C 1000mg - Frasco com 60 cápsulas',
    brand: 'Vitafor',
    image: 'https://images.unsplash.com/photo-1682978900142-9ab110f7a868?w=400',
    originalPrice: 89.90,
    discountPrice: 44.95,
    expiryDays: 25,
    stock: 82,
    rating: 4.6,
    category: 'Vitaminas'
  },
  {
    id: '3',
    name: 'Sérum Facial Vitamina C - 30ml',
    brand: 'Dermage',
    image: 'https://images.unsplash.com/photo-1614159102369-effd79eadadd?w=400',
    originalPrice: 129.90,
    discountPrice: 64.95,
    expiryDays: 20,
    stock: 56,
    rating: 4.9,
    category: 'Beleza'
  },
  {
    id: '4',
    name: 'Fralda Infantil Tamanho M - Pacote com 48 unidades',
    brand: 'Huggies',
    image: 'https://images.unsplash.com/photo-1620875638370-8957e4dbd830?w=400',
    originalPrice: 68.90,
    discountPrice: 41.34,
    expiryDays: 30,
    stock: 120,
    rating: 4.7,
    category: 'Infantil'
  },
  {
    id: '5',
    name: 'Ibuprofeno 600mg - Caixa com 30 comprimidos',
    brand: 'Genérico Medley',
    image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?w=400',
    originalPrice: 42.90,
    discountPrice: 21.45,
    expiryDays: 18,
    stock: 98,
    rating: 4.5,
    category: 'Analgésicos'
  },
  {
    id: '6',
    name: 'Complexo B - Frasco com 90 cápsulas',
    brand: 'Nutrivita',
    image: 'https://images.unsplash.com/photo-1682978900142-9ab110f7a868?w=400',
    originalPrice: 56.90,
    discountPrice: 28.45,
    expiryDays: 22,
    stock: 134,
    rating: 4.4,
    category: 'Vitaminas'
  },
  {
    id: '7',
    name: 'Creme Hidratante Facial - 50g',
    brand: 'Neutrogena',
    image: 'https://images.unsplash.com/photo-1614159102369-effd79eadadd?w=400',
    originalPrice: 78.90,
    discountPrice: 39.45,
    expiryDays: 28,
    stock: 67,
    rating: 4.8,
    category: 'Beleza'
  },
  {
    id: '8',
    name: 'Dipirona 500mg - Caixa com 20 comprimidos',
    brand: 'Genérico EMS',
    image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?w=400',
    originalPrice: 18.90,
    discountPrice: 9.45,
    expiryDays: 12,
    stock: 210,
    rating: 4.7,
    category: 'Analgésicos'
  },
  {
    id: '9',
    name: 'Cálcio Addera Cal 2.000UI MDK 90 comprimidos',
    brand: 'Addera Cal',
    image: '/assets/imagens-de-exemplo/calcio.png',
    originalPrice: 247.93,
    discountPrice: 185.95,
    expiryDays: 90,
    stock: 60,
    rating: 4.9,
    category: 'Vitaminas'
  },
  {
    id: '10',
    name: 'Novalgina Infantil Seringa Solução Oral 100ml Dipirona',
    brand: 'Novalgina',
    image: '/assets/imagens-de-exemplo/novalgina.png',
    originalPrice: 48.16,
    discountPrice: 32.99,
    expiryDays: 90,
    stock: 110,
    rating: 4.7,
    category: 'Infantil'
  },
  {
    id: '11',
    name: 'Bepantriz Pomada para Assaduras Dexpantenol 30g',
    brand: 'Bepantriz',
    image: '/assets/imagens-de-exemplo/benpatriz.png',
    originalPrice: 27.37,
    discountPrice: 12.79,
    expiryDays: 90,
    stock: 80,
    rating: 4.8,
    category: 'Infantil'
  },
  {
    id: '12',
    name: 'Antialérgico Allegra Pediátrico 6mg/ml',
    brand: 'Allegra',
    image: '/assets/imagens-de-exemplo/antialergico.png',
    originalPrice: 91.05,
    discountPrice: 65.99,
    expiryDays: 90,
    stock: 70,
    rating: 4.6,
    category: 'Infantil'
  },  // ECONOMIZE HOJE 🔥
  {
    id: '13',
    name: 'Cálcio Addera Cal 2.000UI MDK 90 comprimidos',
    brand: 'Addera Cal',
    image: '/assets/imagens-de-exemplo/calcio2.png',
    originalPrice: 247.93,
    discountPrice: 185.95,
    expiryDays: 90,
    stock: 60,
    rating: 4.9,
    category: 'Vitaminas'
  },
  {
    id: '14',
    name: 'Sabonete Líquido Johnson\'s Baby Hora do Sono 400ml',
    brand: 'Johnson\'s Baby',
    image: '/assets/imagens-de-exemplo/sabonete.png', 
    originalPrice: 43.49,
    discountPrice: 26.99,
    expiryDays: 90,
    stock: 95,
    rating: 4.7,
    category: 'Mamães e Bebês'
  },
  {
    id: '15',
    name: 'Dorflex Dip 1g 10 comprimidos',
    brand: 'Dorflex',
    image: '/assets/imagens-de-exemplo/dorflex.png', 
    originalPrice: 30.34,
    discountPrice: 20.99,
    expiryDays: 90,
    stock: 150,
    rating: 4.8,
    category: 'Medicamentos e Saúde'
  },
  {
    id: '16',
    name: 'Shampoo Clear Men Anti Caspa Ice Cool Menthol',
    brand: 'Clear Men',
    image: '/assets/imagens-de-exemplo/shampoo.png', 
    originalPrice: 26.99,
    discountPrice: 20.99,
    expiryDays: 90,
    stock: 120,
    rating: 4.6,
    category: 'Higiene Pessoal'
  },
    {
    id: '17',
    name: 'Suplemento Alimentar Neogermina Flora 12 Cápsulas',
    brand: 'Neogermina',
    image: '/assets/imagens-de-exemplo/suplemento.png', 
    originalPrice: 29.15,
    discountPrice: 16.90,
    expiryDays: 90,
    stock: 80,
    rating: 4.7,
    category: 'Medicamentos e Saúde'
  },
  {
    id: '18',
    name: 'Flanax Bayer 550mg Com 10 Comprimidos',
    brand: 'Flanax Bayer',
    image: '/assets/imagens-de-exemplo/flanax.png',
    originalPrice: 28.98,
    discountPrice: 19.90,
    expiryDays: 90,
    stock: 90,
    rating: 4.8,
    category: 'Analgésicos'
  },
  {
    id: '19',
    name: 'Baristar Medley | Com 100 Cápsulas',
    brand: 'Baristar Medley',
    image: '/assets/imagens-de-exemplo/baristar.png', 
    originalPrice: 168.50,
    discountPrice: 109.90,
    expiryDays: 90,
    stock: 60,
    rating: 4.6,
    category: 'Medicamentos e Saúde'
  },
  {
    id: '20',
    name: 'Vitamina C Cenevit Zinco Efervescente 1g Legrand',
    brand: 'Cenevit Legrand',
    image: '/assets/imagens-de-exemplo/vitamina-c.png', 
    originalPrice: 20.83,
    discountPrice: 7.42,
    expiryDays: 90,
    stock: 120,
    rating: 4.9,
    category: 'Vitaminas'
  },
  {
    id: '21',
    name: 'Protetor Solar Facial Neostrata Minesol Oil Control FPS70 40g',
    brand: 'Neostrata Minesol',
    image: '/assets/imagens-de-exemplo/protetor-solar-facial.png',
    originalPrice: 109.90,
    discountPrice: 61.90,
    expiryDays: 90,
    stock: 60,
    rating: 4.8,
    category: 'Pele e Beleza'
  },
  {
    id: '22',
    name: 'Protetor Solar Fluido Toque Seco Antioleosidade PS-01 FPS 60 40ml',
    brand: 'Principia',
    image: '/assets/imagens-de-exemplo/protetor-solar.png', 
    originalPrice: 69.90,
    discountPrice: 39.90,
    expiryDays: 90,
    stock: 80,
    rating: 4.9,
    category: 'Pele e Beleza'
  },
  {
    id: '23',
    name: 'Desodorante Roll-On Perspirex Strong 20ml',
    brand: 'Perspirex',
    image: '/assets/imagens-de-exemplo/roll-on.png', 
    originalPrice: 114.90,
    discountPrice: 85.90,
    expiryDays: 90,
    stock: 70,
    rating: 4.7,
    category: 'Higiene Pessoal'
  },
  {
    id: '24',
    name: 'Darrow Actine Gel de Limpeza 120g',
    brand: 'Darrow Actine',
    image: '/assets/imagens-de-exemplo/darrol.png', 
    originalPrice: 39.90,
    discountPrice: 29.90,
    expiryDays: 90,
    stock: 90,
    rating: 4.8,
    category: 'Pele e Beleza'
  },
  {
    id: '25',
    name: 'Loção Hidratante Nivea Milk Pele Seca a Extrasseca 400ml',
    brand: 'Nivea',
    image: '/assets/imagens-de-exemplo/hidratante.png',
    originalPrice: 34.90,
    discountPrice: 19.90,
    expiryDays: 90,
    stock: 80,
    rating: 4.7,
    category: 'Higiene Pessoal'
  },
  {
    id: '26',
    name: 'Creme Cicatricure Antissinais 30 gramas',
    brand: 'Cicatricure',
    image: '/assets/imagens-de-exemplo/cicatricure.png', 
    originalPrice: 54.90,
    discountPrice: 29.90,
    expiryDays: 90,
    stock: 70,
    rating: 4.8,
    category: 'Pele e Beleza'
  },
  {
    id: '27',
    name: 'Teste de Gravidez Tira Cuidmais',
    brand: 'Cuidmais',
    image: '/assets/imagens-de-exemplo/teste-gravidez.png', 
    originalPrice: 8.98,
    discountPrice: 7.98,
    expiryDays: 90,
    stock: 120,
    rating: 4.5,
    category: 'Medicamentos e Saúde'
  },
  {
    id: '28',
    name: 'Gel Dental Carmed Fini Beijos com Flúor 70g',
    brand: 'Carmed Fini',
    image: '/assets/imagens-de-exemplo/carmed.png',
    originalPrice: 24.90,
    discountPrice: 19.90,
    expiryDays: 90,
    stock: 90,
    rating: 4.6,
    category: 'Higiene Pessoal'
  }
];



export const CATEGORIES = ['Em oferta','Medicamentos e Saúde','Vitaminas','Suplementos', 'Pele e Beleza', 'Mamães e Bebês', 'Higiene Pessoal'];


// --- O SERVIÇO (A LÓGICA) ---

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // --- Substitutos do "useState" do React ---

  // 1. O estado do carrinho (era o teu "cartItems")
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  // 2. O estado do drawer (era o teu "isCartOpen")
  private cartOpenSubject = new BehaviorSubject<boolean>(false);
  public isCartOpen$ = this.cartOpenSubject.asObservable();

  constructor(private toastr: ToastrService) { }

  // --- Funções (Lógica do teu App.tsx) ---

  public toggleCart(open: boolean): void {
    this.cartOpenSubject.next(open);
  }

  public addToCart(productId: string, quantity: number): void {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(item => item.id === productId);

    let newItems: CartItem[] = [];

    if (existingItem) {
      if (quantity === 0) {
        newItems = currentItems.filter(item => item.id !== productId);
        this.toastr.info(`${product.name} removido do carrinho.`);
      } else {
        newItems = currentItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        );
      }
    } else if (quantity > 0) {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        image: product.image,
        originalPrice: product.originalPrice,
        discountPrice: product.discountPrice,
        quantity
      };
      newItems = [...currentItems, newItem];
      this.toastr.success(`${product.name} adicionado ao carrinho!`);
    } else {
      newItems = currentItems;
    }

    this.cartItemsSubject.next(newItems);

    if (quantity > 0) {
      this.toggleCart(true);
    }
  }

  public updateQuantity(id: string, quantity: number): void {
    if (quantity === 0) {
      this.removeItem(id);
    } else {
      const currentItems = this.cartItemsSubject.getValue();
      const newItems = currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      this.cartItemsSubject.next(newItems);
    }
  }

  public addQuantity(id: string): void {
    const currentItems = this.cartItemsSubject.getValue();
    const item = currentItems.find(i => i.id === id);
    if (!item) return;

    const product = MOCK_PRODUCTS.find(p => p.id === id);
    const maxStock = product?.stock ?? Infinity;

    if (item.quantity >= maxStock) {
      this.toastr.warning('Quantidade máxima em estoque atingida.');
      return;
    }

    const newItems = currentItems.map(i =>
      i.id === id ? { ...i, quantity: i.quantity + 1 } : i
    );

    this.cartItemsSubject.next(newItems);
  }

  public removeQuantity(id: string): void {
    const currentItems = this.cartItemsSubject.getValue();
    const item = currentItems.find(i => i.id === id);
    if (!item) return;

    const newQty = item.quantity - 1;

    if (newQty <= 0) {
      this.removeItem(id); // já dá o toastr e remove do state
      return;
    }

    const newItems = currentItems.map(i =>
      i.id === id ? { ...i, quantity: newQty } : i
    );

    this.cartItemsSubject.next(newItems);
  }


  public removeItem(id: string): void {
    const currentItems = this.cartItemsSubject.getValue();
    const itemToRemove = currentItems.find(item => item.id === id);
    const newItems = currentItems.filter(item => item.id !== id);
    this.cartItemsSubject.next(newItems);

    if (itemToRemove) {
      this.toastr.info(`${itemToRemove.name} removido do carrinho.`);
    }
  }

  // --- Funções Auxiliares (para os componentes) ---

  // Retorna os produtos para o marketplace
  public getProducts(): Product[] {
    return MOCK_PRODUCTS;
  }

  // Retorna as categorias
  public getCategories(): string[] {
    return CATEGORIES;
  }

  // Retorna o subtotal
  public getSubtotal(): Observable<number> {
    return this.cartItems$.pipe(
      map(items => items.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0))
    );
  }

  // Retorna a contagem de itens para o badge
  public getTotalItemCount(): Observable<number> {
    return this.cartItems$.pipe(
      map(items => items.length) // O React usava items.length
    );
  }
}