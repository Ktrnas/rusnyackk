import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEightComponent } from './component-eight.component';

describe('ComponentEightComponent', () => {
  let component: ComponentEightComponent;
  let fixture: ComponentFixture<ComponentEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
