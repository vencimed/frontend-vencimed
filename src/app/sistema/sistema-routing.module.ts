import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { FarmaciaDashboardComponent } from '../sistema/dashboards/farmacia-dashboard/farmacia-dashboard.component';
import { ClienteDashboardComponent } from '../sistema/dashboards/cliente-dashboard/cliente-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SistemaRoutingModule { }
