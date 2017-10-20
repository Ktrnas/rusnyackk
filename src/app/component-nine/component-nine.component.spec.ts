import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNineComponent } from './component-nine.component';

describe('ComponentNineComponent', () => {
  let component: ComponentNineComponent;
  let fixture: ComponentFixture<ComponentNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
