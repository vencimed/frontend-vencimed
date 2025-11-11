import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaRoutingModule } from './sistema-routing.module';
import { FarmaciaDashboardComponent } from './dashboards/farmacia-dashboard/farmacia-dashboard.component';
import { ClienteDashboardComponent } from './dashboards/cliente-dashboard/cliente-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    FarmaciaDashboardComponent,
    ClienteDashboardComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    NgApexchartsModule,
    LucideAngularModule
  ]
})
export class SistemaModule { }