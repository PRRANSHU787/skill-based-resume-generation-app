import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [],
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css'
})
export class QuestionFormComponent implements OnInit {
	@Input() question: any;
	selectedAnswer: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	selectAnswer(answer: string): void {
	  this.selectedAnswer = answer;
	}
}
