import { Component, Input } from '@angular/core';
import { IQuizSummary } from '../../Models/QuizSummary';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-quiz-summary-graph-component',
  imports: [NgFor],
  templateUrl: './quiz-summary-graph-component.component.html',
  styleUrl: './quiz-summary-graph-component.component.css'
})
export class QuizSummaryGraphComponentComponent {
  @Input()
  quizSummary: IQuizSummary[]=[];
}
