import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarfechaPage } from './seleccionarfecha.page';

describe('SeleccionarfechaPage', () => {
  let component: SeleccionarfechaPage;
  let fixture: ComponentFixture<SeleccionarfechaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionarfechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
