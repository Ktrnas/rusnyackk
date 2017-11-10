import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSevenComponent } from './component-seven.component';

describe('ComponentSevenComponent', () => {
  let component: ComponentSevenComponent;
  let fixture: ComponentFixture<ComponentSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
