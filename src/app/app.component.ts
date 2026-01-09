import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalGenericoService } from './core/services/modal-generico.service';
import { ModalCepService } from './core/services/modal-cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vencimed-app';
  @ViewChild('modalGenerico', { read: ViewContainerRef, static: true })
  modalGenericoOutlet!: ViewContainerRef;

  @ViewChild('modalCep', { read: ViewContainerRef, static: true })
  modalCepOutlet!: ViewContainerRef;

  constructor(
    private modalGenericoService: ModalGenericoService,
    private modalCepService: ModalCepService
  ) { }

  ngAfterViewInit(): void {
    this.modalGenericoService.registerOutlet(this.modalGenericoOutlet);
    this.modalCepService.registerOutlet(this.modalCepOutlet);
  }
}
