import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; // Importa o Observable
import { CartService } from '../core/services/cart.service'; // Importa o serviço

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  // Observable para controlar a abertura do sidenav
  public isCartOpen$!: Observable<boolean>;

  // Injeta o serviço
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Liga o nosso observable ao do serviço
    this.isCartOpen$ = this.cartService.isCartOpen$;
  }

  // Função para fechar o sidenav (quando o utilizador clica fora)
  onCloseDrawer(): void {
    this.cartService.toggleCart(false);
  }
}