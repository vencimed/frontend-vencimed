import { Component, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexLegend,
  ApexResponsive
} from 'ng-apexcharts';


export type SalesChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
};

export type CategoryChartOptions = {
  series: any;
  chart: ApexChart;
  labels: any;
  colors: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
};


type Trend = 'up' | 'down' | 'warning';
type IntegrationStatus = 'online' | 'unstable';
type ExpiringStatus = 'critical' | 'warning';

interface SidebarItem {
  label: string;
  icon: string;
  active?: boolean;
}
interface Metric {
  title: string;
  value: string;
  change: string;
  trend: Trend;
  icon: string;
}
interface Integration {
  name: string;
  status: IntegrationStatus;
}
interface SalesPoint {
  name: string;
  vendas: number;
}
interface CategorySlice {
  name: string;
  value: number;
  color: string;
}
interface ExpiringProduct {
  id: number;
  name: string;
  batch: string;
  quantity: number;
  expiry: string;
  status: ExpiringStatus;
}


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', icon: 'layout-dashboard', active: true },
    { label: 'Produtos', icon: 'package' },
    { label: 'Pedidos', icon: 'shopping-cart' },
    { label: 'Clientes', icon: 'users' },
    { label: 'Relatórios', icon: 'bar-chart-3' },
    { label: 'Documentos', icon: 'file-text' },
    { label: 'Configurações', icon: 'settings' },
  ];

  metrics: Metric[] = [
    { title: 'Vendas do Mês', value: 'R$ 248.540', change: '+12,5%', trend: 'up', icon: 'trending-up' },
    { title: 'Produtos Ativos', value: '1.245', change: '+8', trend: 'up', icon: 'package' },
    { title: 'Pedidos Pendentes', value: '89', change: '-5', trend: 'down', icon: 'shopping-cart' },
    { title: 'Alerta de Estoque', value: '23', change: '+3', trend: 'warning', icon: 'alert-circle' },
  ];

  integrations: Integration[] = [
    { name: 'ERP Principal', status: 'online' },
    { name: 'Gateway Pagamento', status: 'online' },
    { name: 'API Estoque', status: 'unstable' },
    { name: 'Sistema Logística', status: 'online' },
  ];

  salesData: SalesPoint[] = [
    { name: 'Jan', vendas: 145000 },
    { name: 'Fev', vendas: 182000 },
    { name: 'Mar', vendas: 165000 },
    { name: 'Abr', vendas: 198000 },
    { name: 'Mai', vendas: 225000 },
    { name: 'Jun', vendas: 248540 },
  ];

  categoryData: CategorySlice[] = [
    { name: 'Analgésicos', value: 35, color: '#176891' },
    { name: 'Vitaminas', value: 28, color: '#16A34A' },
    { name: 'Beleza', value: 22, color: '#F59E0B' },
    { name: 'Infantil', value: 15, color: '#3B82F6' },
  ];

  expiringProducts: ExpiringProduct[] = [
    { id: 1, name: 'Paracetamol 750mg', batch: 'L2345', quantity: 145, expiry: '15 dias', status: 'critical' },
    { id: 2, name: 'Dipirona 500mg', batch: 'L2389', quantity: 210, expiry: '12 dias', status: 'critical' },
    { id: 3, name: 'Ibuprofeno 600mg', batch: 'L2401', quantity: 98, expiry: '18 dias', status: 'warning' },
    { id: 4, name: 'Vitamina C 1000mg', batch: 'L2423', quantity: 82, expiry: '25 dias', status: 'warning' },
    { id: 5, name: 'Complexo B', batch: 'L2445', quantity: 134, expiry: '22 dias', status: 'warning' },
  ];

  filterPeriod: '7days' | '30days' = '7days';
  
  public salesChartOptions: Partial<SalesChartOptions>;
  public categoryChartOptions: Partial<CategoryChartOptions>;

  
  constructor() {
    
    
    this.salesChartOptions = {
      series: [
        {
          name: "Vendas",
          data: this.salesData.map(d => d.vendas) 
        }
      ],
      chart: { type: "bar", height: 220, toolbar: { show: false } }, 
      plotOptions: { bar: { borderRadius: 8, horizontal: false } },
      dataLabels: { enabled: false },
      xaxis: {
        categories: this.salesData.map(d => d.name),
        labels: { style: { colors: "#6B7280" } }
      },
      yaxis: { labels: { style: { colors: "#6B7280" } } },
      tooltip: {
        y: { formatter: (val) => "R$ " + val.toLocaleString('pt-BR') }
      }
    };

    this.categoryChartOptions = {
      series: this.categoryData.map(d => d.value), 
      chart: { type: "donut", height: 250 }, 
      labels: this.categoryData.map(d => d.name), 
      colors: this.categoryData.map(d => d.color), 
      dataLabels: { 
        enabled: false 
      }, 
      legend: { show: false }, 
      responsive: [{
        breakpoint: 480,
        options: { chart: { width: 200 } }
      }]
    };
  }

  ngOnInit() {
  }
  
  setFilterPeriod(period: '7days' | '30days') {
    this.filterPeriod = period;
  }

  get todayLabel(): string {
    return 'Segunda, 10 de Novembro 2025';
  }
}