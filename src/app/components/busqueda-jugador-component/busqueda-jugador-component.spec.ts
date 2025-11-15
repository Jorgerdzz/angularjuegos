import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaJugadorComponent } from './busqueda-jugador-component';

describe('BusquedaJugadorComponent', () => {
  let component: BusquedaJugadorComponent;
  let fixture: ComponentFixture<BusquedaJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
