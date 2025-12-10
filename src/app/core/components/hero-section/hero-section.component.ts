import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  slides = [
    {
      src: 'assets/imagens/cupom-promocional.png',
      alt: 'Banner com cupom promocional'
    },
    {
      src: 'assets/imagens/carrossel-banner.png',
      alt: 'Banner principal com destaque de ofertas'
    },
    {
      src: 'assets/imagens/skincare-promocao.png',
      alt: 'Banner com skincare promocional'
    },
    {
      src: 'assets/imagens/festival-dos-bebes.png',
      alt: 'Banner com skincare promocional'
    }
  ];


  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide(): void {
    this.clearAutoSlide(); // garante que não tem outro interval pendurado

    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 segundos
  }

  clearAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.startAutoSlide(); // reseta o timer ao clicar na bolinha
  }

}
