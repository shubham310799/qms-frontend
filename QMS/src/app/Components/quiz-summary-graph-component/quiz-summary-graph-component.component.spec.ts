import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSummaryGraphComponentComponent } from './quiz-summary-graph-component.component';

describe('QuizSummaryGraphComponentComponent', () => {
  let component: QuizSummaryGraphComponentComponent;
  let fixture: ComponentFixture<QuizSummaryGraphComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSummaryGraphComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSummaryGraphComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
