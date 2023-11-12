import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoseguimientoPage } from './nuevoseguimiento.page';

describe('NuevoseguimientoPage', () => {
  let component: NuevoseguimientoPage;
  let fixture: ComponentFixture<NuevoseguimientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoseguimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
