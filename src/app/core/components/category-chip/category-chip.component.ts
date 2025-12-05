import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-chip',
  templateUrl: './category-chip.component.html',
  styleUrls: ['./category-chip.component.css']
})
export class CategoryChipComponent {

  // 1. @Input() é como o React recebe "props"
  @Input() label: string = ''; // O "label" que vem do pai
  @Input() selected: boolean = false; // O "selected" que vem do pai
  @Input() icon: string | null = null;
  // 2. @Output() é como o React faz "onClick" (envia um evento para o pai)
  //    Usamos "EventEmitter" para emitir um evento.
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  // 3. Criamos uma função local que é chamada pelo clique do botão
  onClick(): void {
    // 4. Emitimos o evento "clicked" para o componente pai
    this.clicked.emit();
  }
}