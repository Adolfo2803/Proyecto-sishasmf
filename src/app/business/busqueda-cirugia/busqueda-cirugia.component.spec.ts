import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCirugiaComponent } from './busqueda-cirugia.component';

describe('BusquedaCirugiaComponent', () => {
  let component: BusquedaCirugiaComponent;
  let fixture: ComponentFixture<BusquedaCirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaCirugiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
