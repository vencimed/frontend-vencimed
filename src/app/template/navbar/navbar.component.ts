import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  // controla se o menu lateral está aberto
  isSidebarOpen = true;

  // abre/fecha o menu
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
