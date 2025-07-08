import { Component } from '@angular/core';
import { QuizSummaryComponentComponent } from '../quiz-summary-component/quiz-summary-component.component';
import { IQuizSummary } from '../../Models/QuizSummary';
import { QuizSummaryGraphComponentComponent } from '../quiz-summary-graph-component/quiz-summary-graph-component.component';
import { QuizListComponent } from '../quiz-list/quiz-list.component';

@Component({
  selector: 'app-home',
  imports: [QuizSummaryComponentComponent,
    QuizSummaryGraphComponentComponent,
    QuizListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  quizSummary: IQuizSummary[] = [
    {
      title: "Attempted",
      count: 232
    },
    {
      title: "In Progress",
      count: 146
    },
    {
      title: "Not Attempted",
      count: 335
    },
    {
      title: "Awaiting",
      count: 12
    }];
}
