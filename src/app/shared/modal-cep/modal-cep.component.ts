import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-cep',
  templateUrl: './modal-cep.component.html',
  styleUrls: ['./modal-cep.component.css']
})
export class ModalCepComponent {

  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<string>();

  cepValue = '';
  error: string | null = null;

  onModalClose(): void {
    this.close.emit();
  }

  onCepInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = (input.value || '').replace(/\D/g, '').slice(0, 8);

    const formatted = digits.length > 5
      ? `${digits.slice(0, 5)}-${digits.slice(5)}`
      : digits;

    input.value = formatted;
    this.cepValue = formatted;
    this.error = null;
  }

  onVerifyCep(): void {
    const digits = (this.cepValue || '').replace(/\D/g, '');

    if (digits.length !== 8) {
      this.error = 'Digite um CEP válido (8 números).';
      return;
    }

    const formatted = `${digits.slice(0, 5)}-${digits.slice(5)}`;

    this.saved.emit(formatted);
  }

}
