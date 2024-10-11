import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCarritoPage } from './lista-carrito.page';

describe('ListaCarritoPage', () => {
  let component: ListaCarritoPage;
  let fixture: ComponentFixture<ListaCarritoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
