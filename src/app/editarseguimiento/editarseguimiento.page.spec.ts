import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarseguimientoPage } from './editarseguimiento.page';

describe('EditarseguimientoPage', () => {
  let component: EditarseguimientoPage;
  let fixture: ComponentFixture<EditarseguimientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarseguimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
