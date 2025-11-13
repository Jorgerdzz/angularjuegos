import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirFicheroComponent } from './subir-fichero-component';

describe('SubirFicheroComponent', () => {
  let component: SubirFicheroComponent;
  let fixture: ComponentFixture<SubirFicheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirFicheroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirFicheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
