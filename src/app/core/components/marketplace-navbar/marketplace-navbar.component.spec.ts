import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceNavbarComponent } from './marketplace-navbar.component';

describe('MarketplaceNavbarComponent', () => {
  let component: MarketplaceNavbarComponent;
  let fixture: ComponentFixture<MarketplaceNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplaceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
