import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTemplateUrlComponent } from './component-template-url.component';

describe('ComponentTemplateUrlComponent', () => {
  let component: ComponentTemplateUrlComponent;
  let fixture: ComponentFixture<ComponentTemplateUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTemplateUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTemplateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
