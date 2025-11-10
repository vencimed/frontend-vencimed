import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { AdminDashboardComponent } from './sistema/dashboards/admin-dashboard/admin-dashboard.component';
import { ClienteDashboardComponent } from './sistema/dashboards/cliente-dashboard/cliente-dashboard.component';
import { FarmaciaDashboardComponent } from './sistema/dashboards/farmacia-dashboard/farmacia-dashboard.component';

const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'farmacia-dashboard', component: FarmaciaDashboardComponent },
  { path: 'cliente-dashboard', component: ClienteDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
