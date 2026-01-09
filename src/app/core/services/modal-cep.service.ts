import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalCepComponent } from 'src/app/shared/modal-cep/modal-cep.component';

@Injectable({
  providedIn: 'root'
})
export class ModalCepService {
  private outlet!: ViewContainerRef;
  private modalRef?: ComponentRef<ModalCepComponent>;
  private subs: Subscription[] = [];

  registerOutlet(outlet: ViewContainerRef): void {
    this.outlet = outlet;
  }

  open(onSaved?: (cep: string) => void): void {
    if (!this.outlet) throw new Error('Outlet do ModalCepService não registrado!');
    this.close(); // garante 1 aberto por vez

    this.outlet.clear();
    this.modalRef = this.outlet.createComponent(ModalCepComponent);

    this.subs.push(
      this.modalRef.instance.close.subscribe(() => this.close()),
      this.modalRef.instance.saved.subscribe((cep) => {
        onSaved?.(cep);
        this.close();
      })
    );
  }

  close(): void {
    this.subs.forEach(s => s.unsubscribe());
    this.subs = [];

    if (this.modalRef) {
      this.modalRef.destroy();
      this.modalRef = undefined;
    }
  }
}
