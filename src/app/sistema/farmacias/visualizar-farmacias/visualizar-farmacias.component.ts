import { Component, HostListener, OnInit } from '@angular/core';

interface Farmacia {
  id: number;
  razaoSocial: string;
  cnpj: string;
  endereco: string;
  email: string;
  estado: string; // UF
  cidade: string;
}

@Component({
  selector: 'app-visualizar-farmacias',
  templateUrl: './visualizar-farmacias.component.html',
  styleUrls: ['./visualizar-farmacias.component.css'],
})
export class VisualizarFarmaciasComponent implements OnInit {
  paginaAtual: number = 1;
  itensPorPagina: number = 6;

  menuAbertoId: number | null = null;

  filtroEstado: string = '';
  filtroCidade: string = '';
  termoBusca: string = '';

  farmacias: Farmacia[] = [
    {
      id: 1,
      razaoSocial: 'Raia Drogasil SA',
      cnpj: '61.585.865/0240-93',
      endereco: 'Av. Nsa. Sra. Assunção, 6...',
      email: 'contato@drogasil.com.br',
      estado: 'SP',
      cidade: 'São Paulo',
    },
    {
      id: 2,
      razaoSocial: 'Empreendimentos Pague Me...',
      cnpj: '06.626.253/0001-51',
      endereco: 'Rua Senador Pompeu, 15...',
      email: 'contato@paguemenos.com.br',
      estado: 'CE',
      cidade: 'Fortaleza',
    },
    {
      id: 3,
      razaoSocial: 'Imifarma Produtos Farmacê...',
      cnpj: '04.899.316/0478-58',
      endereco: 'Avenida Braz Leme, 2175...',
      email: 'contato@extrafarma.com.br',
      estado: 'PA',
      cidade: 'Belém',
    },
    {
      id: 4,
      razaoSocial: 'COMERCIO DE MEDICAME...',
      cnpj: '88.212.113/0001-00',
      endereco: 'Av. Brasil Oeste, 665 Cen...',
      email: 'contato@saojoao.com.br',
      estado: 'RS',
      cidade: 'Porto Alegre',
    },
  ];

  ngOnInit(): void {}

  // listas dinâmicas pros selects
  get estadosDisponiveis(): string[] {
    return Array.from(new Set(this.farmacias.map((f) => f.estado))).sort();
  }

  get cidadesDisponiveis(): string[] {
    const base = this.filtroEstado
      ? this.farmacias.filter((f) => f.estado === this.filtroEstado)
      : this.farmacias;

    return Array.from(new Set(base.map((f) => f.cidade))).sort();
  }

  // filtro + paginação
  get farmaciasFiltradas(): Farmacia[] {
    const termo = this.termoBusca.trim().toLowerCase();

    return this.farmacias
      .filter((f) => (this.filtroEstado ? f.estado === this.filtroEstado : true))
      .filter((f) => (this.filtroCidade ? f.cidade === this.filtroCidade : true))
      .filter((f) => {
        if (!termo) return true;
        return (
          f.razaoSocial.toLowerCase().includes(termo) ||
          f.cnpj.toLowerCase().includes(termo) ||
          f.email.toLowerCase().includes(termo) ||
          f.endereco.toLowerCase().includes(termo)
        );
      });
  }

  get totalItens(): number {
    return this.farmaciasFiltradas.length;
  }

  get farmaciasPaginadas(): Farmacia[] {
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    const end = start + this.itensPorPagina;
    return this.farmaciasFiltradas.slice(start, end);
  }

  private resetarPagina(): void {
    this.paginaAtual = 1;
  }

  onEstadoChange(event: Event): void {
    this.filtroEstado = (event.target as HTMLSelectElement).value;
    // se trocar estado, reseta cidade (pra não ficar inválida)
    this.filtroCidade = '';
    this.resetarPagina();
    this.fecharMenu();
  }

  onCidadeChange(event: Event): void {
    this.filtroCidade = (event.target as HTMLSelectElement).value;
    this.resetarPagina();
    this.fecharMenu();
  }

  onSearchChange(event: Event): void {
    this.termoBusca = (event.target as HTMLInputElement).value;
    this.resetarPagina();
    this.fecharMenu();
  }

  onPaginaMudou(p: number): void {
    this.paginaAtual = p;
    this.fecharMenu();
  }

  onExportar(): void {
    console.log('Exportar farmácias');
    this.fecharMenu();
  }

  onCadastrarFarmacia(): void {
    console.log('Cadastrar farmácia');
    this.fecharMenu();
  }

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

  onVerDetalhes(f: Farmacia): void {
    console.log('Ver detalhes', f);
    this.fecharMenu();
  }

  onEditar(f: Farmacia): void {
    console.log('Editar', f);
    this.fecharMenu();
  }

  onExcluir(f: Farmacia): void {
    console.log('Excluir', f);
    this.fecharMenu();
  }

  trackById(_: number, item: Farmacia): number {
    return item.id;
  }
}
