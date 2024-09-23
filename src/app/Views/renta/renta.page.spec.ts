import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentaPage } from './renta.page';

describe('RentaPage', () => {
  let component: RentaPage;
  let fixture: ComponentFixture<RentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
