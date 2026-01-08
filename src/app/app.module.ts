import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { SistemaModule } from './sistema/sistema.module';
import { PageMarketplaceComponent } from './page-marketplace/page-marketplace.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { LucideAngularModule, ShoppingCart, User, Search, ChevronLeft, 
  ChevronRight, Plus, Minus, Eye, X, Trash2, Clock, LayoutDashboard, Package, BarChart3, Settings, Users, 
  FileText, TrendingUp, AlertCircle, Download, Phone, Mail, MapPin, ChevronDown,
  Menu} from 'lucide-angular';
import { MarketplaceNavbarComponent } from './core/components/marketplace-navbar/marketplace-navbar.component';
import { MarketplaceFooterComponent } from './core/components/marketplace-footer/marketplace-footer.component';
import { HeroSectionComponent } from './core/components/hero-section/hero-section.component';
import { CategoryChipComponent } from './core/components/category-chip/category-chip.component';
import { ProductCardComponent } from './core/components/product-card/product-card.component';
import { CartDrawerComponent } from './core/components/cart-drawer/cart-drawer.component';
import { MetricCardComponent } from './core/components/metric-card/metric-card.component';
import { TemplateModule } from './template/template.module';
import { ProductCarouselComponent } from './core/components/product-carousel/product-carousel.component';
import { CadastroComponent } from './cadastro/cadastro.component'; 
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    RecuperarSenhaComponent,
    PageMarketplaceComponent,
    MarketplaceNavbarComponent,
    MarketplaceFooterComponent,
    HeroSectionComponent,
    CategoryChipComponent,
    ProductCardComponent,
    CartDrawerComponent,
    MetricCardComponent,
    ProductCarouselComponent,
    CadastroComponent,
  ],
  
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TemplateModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    NgApexchartsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    }),
    LucideAngularModule.pick({
      ShoppingCart, User, Search, ChevronLeft, ChevronRight, Plus, Minus, Eye, X, Trash2, Clock, 
      LayoutDashboard, Package, BarChart3, Settings, Users, FileText, TrendingUp, 
      AlertCircle, Download, Phone, Mail, MapPin, Menu, ChevronDown
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  

  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],


  bootstrap: [AppComponent] 
})
export class AppModule { }