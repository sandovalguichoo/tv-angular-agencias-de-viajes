import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPanelAdministracionDestinosComponent } from './vista-panel-administracion-destinos.component';

describe('VistaPanelAdministracionDestinosComponent', () => {
  let component: VistaPanelAdministracionDestinosComponent;
  let fixture: ComponentFixture<VistaPanelAdministracionDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPanelAdministracionDestinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPanelAdministracionDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
