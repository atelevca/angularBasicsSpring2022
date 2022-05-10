import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalCardComponent } from './aditional-card.component';

describe('AditionalCardComponent', () => {
  let component: AditionalCardComponent;
  let fixture: ComponentFixture<AditionalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditionalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
