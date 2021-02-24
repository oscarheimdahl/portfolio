import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazerHandlerComponent } from './lazer-handler.component';

describe('LazerHandlerComponent', () => {
  let component: LazerHandlerComponent;
  let fixture: ComponentFixture<LazerHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazerHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazerHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
