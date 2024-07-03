import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActividadComponent } from './detail-actividad.component';

describe('DetailActividadComponent', () => {
  let component: DetailActividadComponent;
  let fixture: ComponentFixture<DetailActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailActividadComponent]
    });
    fixture = TestBed.createComponent(DetailActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
