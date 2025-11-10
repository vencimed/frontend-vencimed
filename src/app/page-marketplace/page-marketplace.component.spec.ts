import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMarketplaceComponent } from './page-marketplace.component';

describe('PageMarketplaceComponent', () => {
  let component: PageMarketplaceComponent;
  let fixture: ComponentFixture<PageMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMarketplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
