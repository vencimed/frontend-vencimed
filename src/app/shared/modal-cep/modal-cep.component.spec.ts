import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCepComponent } from './modal-cep.component';

describe('ModalCepComponent', () => {
  let component: ModalCepComponent;
  let fixture: ComponentFixture<ModalCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
