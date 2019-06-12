import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayHeroComponent } from './diplay-hero.component';

describe('DiplayHeroComponent', () => {
  let component: DiplayHeroComponent;
  let fixture: ComponentFixture<DiplayHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
