import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPanelAdministracionTravelingMexicoComponent } from './vista-panel-administracion-traveling-mexico.component';

describe('VistaPanelAdministracionTravelingMexicoComponent', () => {
  let component: VistaPanelAdministracionTravelingMexicoComponent;
  let fixture: ComponentFixture<VistaPanelAdministracionTravelingMexicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPanelAdministracionTravelingMexicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPanelAdministracionTravelingMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
