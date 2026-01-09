import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalGenericoComponent } from './modal-generico/modal-generico.component';
import { ModalCepComponent } from './modal-cep/modal-cep.component';
import { LucideAngularModule, MapPin } from 'lucide-angular';


@NgModule({
  declarations: [
    PaginationComponent,
    ModalGenericoComponent,
    ModalCepComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({MapPin})
  ],
  exports: [
    PaginationComponent
  ]
})
export class SharedModule { }
