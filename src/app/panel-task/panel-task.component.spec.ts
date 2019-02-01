import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTaskComponent } from './panel-task.component';

describe('PanelTaskComponent', () => {
  let component: PanelTaskComponent;
  let fixture: ComponentFixture<PanelTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
