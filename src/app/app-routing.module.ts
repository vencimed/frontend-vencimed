import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { PageMarketplaceComponent } from './page-marketplace/page-marketplace.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LayoutSistemComponent } from './layout-sistem/layout-sistem.component';
import { AdminDashboardComponent } from './sistema/dashboards/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'cadastro', component: CadastroComponent},
  // Site público
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: PageMarketplaceComponent },
    ],
  },

  // Sistema (área logada)
  {
    path: 'sistema',
    component: LayoutSistemComponent,
    loadChildren: () =>
      import('./sistema/sistema.module').then(m => m.SistemaModule),
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}