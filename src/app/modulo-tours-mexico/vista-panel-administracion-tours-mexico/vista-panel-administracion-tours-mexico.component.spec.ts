import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPanelAdministracionToursMexicoComponent } from './vista-panel-administracion-tours-mexico.component';

describe('VistaPanelAdministracionToursMexicoComponent', () => {
  let component: VistaPanelAdministracionToursMexicoComponent;
  let fixture: ComponentFixture<VistaPanelAdministracionToursMexicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPanelAdministracionToursMexicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPanelAdministracionToursMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
