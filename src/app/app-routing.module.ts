import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { PageMarketplaceComponent } from './page-marketplace/page-marketplace.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  
  {
    path: '', 
    component: LayoutComponent, 
    children: [
      
      { path: '', component: PageMarketplaceComponent },
      
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