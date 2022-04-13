import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsCardComponent } from './webinars-card.component';

describe('WebinarsCardComponent', () => {
  let component: WebinarsCardComponent;
  let fixture: ComponentFixture<WebinarsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebinarsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
