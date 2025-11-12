import { Component } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  category: string;
  pharmacy: string;
  expiry: string;
  stock: number;
}

export interface ApiIntegration {
  name: string;
  status: string;
  lastSync: string;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface StateData {
  state: string;
  count: number;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  activeMenuItem = 'dashboard';
  filterDays: 7 | 30 = 30;

  // Dados mockados
  clientsByState: StateData[] = [
    { state: 'SP', count: 145 },
    { state: 'RJ', count: 89 },
    { state: 'MG', count: 67 },
    { state: 'RS', count: 54 },
    { state: 'BA', count: 43 },
  ];

  categoryData: CategoryData[] = [
    { name: 'Analgésicos', value: 35, color: '#176891' },
    { name: 'Vitaminas', value: 25, color: '#16A34A' },
    { name: 'Genéricos', value: 20, color: '#6B7280' },
    { name: 'Infantil', value: 12, color: '#0E3A5A' },
    { name: 'Beleza', value: 8, color: '#E6F4FA' },
  ];

  products: Product[] = [
    {
      id: '1',
      name: 'Paracetamol 500mg',
      category: 'Analgésicos',
      pharmacy: 'Farmácia São Paulo',
      expiry: '15 dias',
      stock: 120,
    },
    {
      id: '2',
      name: 'Vitamina C 1000mg',
      category: 'Vitaminas',
      pharmacy: 'Drogaria Central',
      expiry: '22 dias',
      stock: 85,
    },
    {
      id: '3',
      name: 'Ibuprofeno 600mg',
      category: 'Analgésicos',
      pharmacy: 'Farmácia Popular',
      expiry: '8 dias',
      stock: 45,
    },
    {
      id: '4',
      name: 'Complexo B',
      category: 'Vitaminas',
      pharmacy: 'Farmácia São Paulo',
      expiry: '30 dias',
      stock: 200,
    },
  ];

  apiIntegrations: ApiIntegration[] = [
    { name: 'ERP Farmácia', status: 'Online', lastSync: '2 min atrás' },
    { name: 'Sistema de Estoque', status: 'Online', lastSync: '5 min atrás' },
    { name: 'Gateway Pagamento', status: 'Instável', lastSync: '15 min atrás' },
    { name: 'API Logística', status: 'Offline', lastSync: '1h atrás' },
  ];

  onMenuItemClick(itemId: string) {
    this.activeMenuItem = itemId;
  }

  setFilterDays(days: 7 | 30) {
    this.filterDays = days;
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Online':
        return 'status-badge online';
      case 'Instável':
        return 'status-badge unstable';
      case 'Offline':
        return 'status-badge offline';
      default:
        return 'status-badge';
    }
  }

  exportToCSV() {
    console.log('Exportando CSV...');
  }

  // Método auxiliar para calcular altura das barras
  getBarHeight(count: number): string {
    const maxCount = Math.max(...this.clientsByState.map(s => s.count));
    return (count / maxCount * 100) + '%';
  }

  // Método auxiliar para calcular ângulos do gráfico de pizza
  getPieChartBackground(): string {
    let currentAngle = 0;
    let background = '';
    
    this.categoryData.forEach((item, index) => {
      const percentage = item.value;
      const angle = (percentage / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      
      background += `${item.color} ${startAngle}deg ${endAngle}deg, `;
      currentAngle = endAngle;
    });
    
    return `conic-gradient(${background.slice(0, -2)})`;
  }
}