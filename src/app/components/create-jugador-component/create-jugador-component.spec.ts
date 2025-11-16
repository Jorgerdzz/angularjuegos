import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJugadorComponent } from './create-jugador-component';

describe('CreateJugadorComponent', () => {
  let component: CreateJugadorComponent;
  let fixture: ComponentFixture<CreateJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
