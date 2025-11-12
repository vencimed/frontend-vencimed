import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

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

  isSidebarOpen = false;
  isMobile = false;

  
  userName = 'Administrador';
  userRole = 'Admin';

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

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 900;
    if (!this.isMobile) {
      this.isSidebarOpen = true; 
    } else {
      this.isSidebarOpen = false; 
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onItemClick(itemId: string): void {
    this.itemClick.emit(itemId);
    
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }
}