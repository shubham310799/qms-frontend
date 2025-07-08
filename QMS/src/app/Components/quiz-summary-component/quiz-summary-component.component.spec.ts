import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSummaryComponentComponent } from './quiz-summary-component.component';

describe('QuizSummaryComponentComponent', () => {
  let component: QuizSummaryComponentComponent;
  let fixture: ComponentFixture<QuizSummaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSummaryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
