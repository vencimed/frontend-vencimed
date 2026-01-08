import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarFarmaciasComponent } from './visualizar-farmacias.component';

describe('VisualizarFarmaciasComponent', () => {
  let component: VisualizarFarmaciasComponent;
  let fixture: ComponentFixture<VisualizarFarmaciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarFarmaciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarFarmaciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
