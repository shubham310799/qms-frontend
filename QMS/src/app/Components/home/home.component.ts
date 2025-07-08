import { Component } from '@angular/core';
import { QuizSummaryComponentComponent } from '../quiz-summary-component/quiz-summary-component.component';
import { IQuizSummary } from '../../Models/QuizSummary';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [QuizSummaryComponentComponent,
    NgFor
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
