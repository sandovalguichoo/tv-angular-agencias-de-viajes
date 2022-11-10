import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPaginaInicioComponent } from './vista-pagina-inicio.component';

describe('VistaPaginaInicioComponent', () => {
  let component: VistaPaginaInicioComponent;
  let fixture: ComponentFixture<VistaPaginaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPaginaInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPaginaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
