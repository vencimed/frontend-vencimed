// Em: src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Importa os teus componentes de "Layout" e "Página"
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { PageMarketplaceComponent } from './page-marketplace/page-marketplace.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
// (NÃO importes os dashboards aqui, eles vêm do SistemaModule)

const routes: Routes = [
  
  {
    path: '', // <-- Rota base (http://localhost:4200/)
    component: LayoutComponent, 
    children: [
      // Quando o URL for 'http://localhost:4200/',
      { path: '', component: PageMarketplaceComponent },
      
      // Quando o URL for 'http://localhost:4200/page-marketplace'
      { path: 'page-marketplace', component: PageMarketplaceComponent }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },


  {
    path: 'sistema',
    loadChildren: () => import('./sistema/sistema.module').then(m => m.SistemaModule)
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}