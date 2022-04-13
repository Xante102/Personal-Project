import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsCardComponent } from './instructors-card.component';

describe('InstructorsCardComponent', () => {
  let component: InstructorsCardComponent;
  let fixture: ComponentFixture<InstructorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
