import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaDashboardComponent } from './farmacia-dashboard.component';

describe('FarmaciaDashboardComponent', () => {
  let component: FarmaciaDashboardComponent;
  let fixture: ComponentFixture<FarmaciaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaciaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmaciaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
