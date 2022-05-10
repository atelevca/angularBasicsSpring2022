import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSwitcherComponent } from './topic-switcher.component';

describe('TopicSwitcherComponent', () => {
  let component: TopicSwitcherComponent;
  let fixture: ComponentFixture<TopicSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
