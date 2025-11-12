import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaRoutingModule } from './sistema-routing.module';
import { FarmaciaDashboardComponent } from './dashboards/farmacia-dashboard/farmacia-dashboard.component';
import { ClienteDashboardComponent } from './dashboards/cliente-dashboard/cliente-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LucideAngularModule } from 'lucide-angular';
import { TemplateModule } from "src/app/template/template.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

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
    LucideAngularModule,
    TemplateModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
]
})
export class SistemaModule { }