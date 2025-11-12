import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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
  onNotificationsClick() {
    throw new Error('Method not implemented.');
  }
  
  @Input() activeItem: string = '';
  @Output() itemClick = new EventEmitter<string>();

  constructor(private router: Router) {}

  isSidebarOpen = false;
  isMobile = false;
  isProfileDropdownOpen = false;
  
  userName = 'Administrador';
  userRole = 'Administrador';

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
    
    this.initializeSidebarState();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  @HostListener('window:load', ['$event'])
  onPageLoad(event: any) {
    
    this.initializeSidebarState();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 900;
  }

  initializeSidebarState() {
    
    
    this.isSidebarOpen = false;
    
    
    
    
  }

  toggleSidebar() {
    
    if (this.isMobile) {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
    
  }

  toggleProfileDropdown(): void {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  getUserInitial(): string {
    return this.userName.charAt(0).toUpperCase();
  }

  onProfileClick(): void {
    this.isProfileDropdownOpen = false;
    console.log('Perfil clicado');
  }

  onLogoutClick(): void {
    this.router.navigate(['/marketplace']);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-profile') && !target.closest('.dropdown-menu')) {
      this.isProfileDropdownOpen = false;
    }
  }

  onItemClick(itemId: string): void {
    this.itemClick.emit(itemId);
    
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }
}