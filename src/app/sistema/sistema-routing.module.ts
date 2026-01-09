import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { FarmaciaDashboardComponent } from './dashboards/farmacia-dashboard/farmacia-dashboard.component';
import { ClienteDashboardComponent } from './dashboards/cliente-dashboard/cliente-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { VisualizarClientesComponent } from './clientes/visualizar-clientes/visualizar-clientes.component';
import { VisualizarFarmaciasComponent } from './farmacias/visualizar-farmacias/visualizar-farmacias.component';
const routes: Routes = [
  {
    path: 'usuario',
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent },

      //Clientes
      { path: 'visualizar-clientes', component: VisualizarClientesComponent}, 

      //Farmácias
      { path: 'visualizar-farmacias', component: VisualizarFarmaciasComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SistemaRoutingModule { }
