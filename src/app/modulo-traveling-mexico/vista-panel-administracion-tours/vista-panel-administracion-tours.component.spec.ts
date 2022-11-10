import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPanelAdministracionToursComponent } from './vista-panel-administracion-tours.component';

describe('VistaPanelAdministracionToursComponent', () => {
  let component: VistaPanelAdministracionToursComponent;
  let fixture: ComponentFixture<VistaPanelAdministracionToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPanelAdministracionToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPanelAdministracionToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
