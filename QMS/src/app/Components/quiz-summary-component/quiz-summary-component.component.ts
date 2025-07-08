import { Component, Input } from '@angular/core';
import { IQuizSummary } from '../../Models/QuizSummary';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-quiz-summary-component',
  imports: [NgFor],
  templateUrl: './quiz-summary-component.component.html',
  styleUrl: './quiz-summary-component.component.css'
})
export class QuizSummaryComponentComponent {
  @Input()
  quizSummary:IQuizSummary[] = []
}
