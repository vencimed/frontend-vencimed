import { Component, Input, Output, EventEmitter } from '@angular/core';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() activeItem: string = '';
  @Output() itemClick = new EventEmitter<string>();

  menuItems: MenuItem[] = [
    { id: 'admin', label: 'Painel do Administrador', icon: 'user' },
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'clients', label: 'Clientes', icon: 'users' },
    { id: 'pharmacies', label: 'Farmácias', icon: 'building2' },
    { id: 'products', label: 'Produtos & Validade', icon: 'package' },
    { id: 'integrations', label: 'Integrações API', icon: 'plug' },
    { id: 'reports', label: 'Relatórios', icon: 'file-text' },
    { id: 'support', label: 'Suporte de TI', icon: 'help-circle' },
    { id: 'settings', label: 'Configurações', icon: 'settings' }
  ];

  onItemClick(itemId: string): void {
    this.itemClick.emit(itemId);
  }
}