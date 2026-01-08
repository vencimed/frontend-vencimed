import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSistemComponent } from './layout-sistem.component';

describe('LayoutSistemComponent', () => {
  let component: LayoutSistemComponent;
  let fixture: ComponentFixture<LayoutSistemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSistemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSistemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
