import { Component, HostListener, OnInit } from '@angular/core';

type Genero = 'Masculino' | 'Feminino' | 'Outro';

interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  dataNascimento: string; // dd/mm/yyyy
  genero: Genero;
  estado: string; // UF
  idade: number;
}

@Component({
  selector: 'app-visualizar-clientes',
  templateUrl: './visualizar-clientes.component.html',
  styleUrls: ['./visualizar-clientes.component.css'],
})
export class VisualizarClientesComponent implements OnInit {
  // paginação (mesmo padrão do seu componente)
  paginaAtual: number = 1;
  itensPorPagina: number = 6;

  // menu (3 pontinhos)
  menuAbertoId: number | null = null;

  // filtros
  filtroGenero: string = '';
  filtroFaixaEtaria: string = '';
  filtroEstado: string = '';
  termoBusca: string = '';

  // dados (mock – depois você troca por service)
  clientes: Cliente[] = [
    {
      id: 1,
      nome: 'Jacob Jones',
      cpf: '000.000.000-00',
      email: 'jacobjones@gmail.com',
      dataNascimento: '22/11/2002',
      genero: 'Masculino',
      estado: 'SP',
      idade: 22,
    },
    {
      id: 2,
      nome: 'Robert Fox',
      cpf: '000.000.000-00',
      email: 'robertfox@gmail.com',
      dataNascimento: '01/04/1994',
      genero: 'Masculino',
      estado: 'CE',
      idade: 30,
    },
    {
      id: 3,
      nome: 'Annette Black',
      cpf: '000.000.000-00',
      email: 'annetteblack@gmail.com',
      dataNascimento: '25/03/1980',
      genero: 'Feminino',
      estado: 'RJ',
      idade: 44,
    },
    {
      id: 4,
      nome: 'Jane Cooper',
      cpf: '000.000.000-00',
      email: 'jane@gmail.com',
      dataNascimento: '10/12/2000',
      genero: 'Feminino',
      estado: 'MG',
      idade: 24,
    },
  ];

  ngOnInit(): void {}

  // ====== GETTERS (filtragem + paginação) ======
  get clientesFiltrados(): Cliente[] {
    const termo = this.termoBusca.trim().toLowerCase();

    return this.clientes
      .filter((c) => (this.filtroGenero ? c.genero === this.filtroGenero : true))
      .filter((c) => (this.filtroEstado ? c.estado === this.filtroEstado : true))
      .filter((c) => (this.filtroFaixaEtaria ? this.matchFaixa(c.idade, this.filtroFaixaEtaria) : true))
      .filter((c) => {
        if (!termo) return true;
        return (
          c.nome.toLowerCase().includes(termo) ||
          c.cpf.toLowerCase().includes(termo) ||
          c.email.toLowerCase().includes(termo)
        );
      });
  }

  get totalItens(): number {
    return this.clientesFiltrados.length;
  }

  get clientesPaginados(): Cliente[] {
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    const end = start + this.itensPorPagina;
    return this.clientesFiltrados.slice(start, end);
  }

  private matchFaixa(idade: number, faixa: string): boolean {
    switch (faixa) {
      case '0-17':
        return idade <= 17;
      case '18-24':
        return idade >= 18 && idade <= 24;
      case '25-34':
        return idade >= 25 && idade <= 34;
      case '35-44':
        return idade >= 35 && idade <= 44;
      case '45-59':
        return idade >= 45 && idade <= 59;
      case '60+':
        return idade >= 60;
      default:
        return true;
    }
  }

  private resetarPagina(): void {
    this.paginaAtual = 1;
  }

  // ====== eventos filtros ======
  onGeneroChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.filtroGenero = value;
    this.resetarPagina();
    this.fecharMenu();
  }

  onFaixaEtariaChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.filtroFaixaEtaria = value;
    this.resetarPagina();
    this.fecharMenu();
  }

  onEstadoChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.filtroEstado = value;
    this.resetarPagina();
    this.fecharMenu();
  }

  onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.termoBusca = value;
    this.resetarPagina();
    this.fecharMenu();
  }

  // ====== paginação ======
  onPaginaMudou(p: number): void {
    this.paginaAtual = p;
    this.fecharMenu();
  }

  // ====== ações topo ======
  onExportar(): void {
    console.log('Exportar clientes');
    this.fecharMenu();
  }

  onCadastrarCliente(): void {
    console.log('Cadastrar cliente');
    this.fecharMenu();
  }

  // ====== menu (3 pontinhos) ======
  toggleMenu(id: number, ev: MouseEvent): void {
    ev.stopPropagation();
    this.menuAbertoId = this.menuAbertoId === id ? null : id;
  }

  fecharMenu(): void {
    this.menuAbertoId = null;
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.fecharMenu();
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.fecharMenu();
  }

  // ====== ações do menu ======
  onVerDetalhes(c: Cliente): void {
    console.log('Ver detalhes', c);
    this.fecharMenu();
  }

  onEditar(c: Cliente): void {
    console.log('Editar', c);
    this.fecharMenu();
  }

  onExcluir(c: Cliente): void {
    console.log('Excluir', c);
    this.fecharMenu();
  }

  trackById(_: number, item: Cliente): number {
    return item.id;
  }
}
