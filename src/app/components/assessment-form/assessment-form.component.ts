import { Component, OnInit } from '@angular/core';
import { QuestionFormComponent } from '../question-form/question-form.component';

@Component({
  selector: 'app-assessment-form',
  standalone: true,
  imports: [QuestionFormComponent],
  templateUrl: './assessment-form.component.html',
  styleUrl: './assessment-form.component.css'
})
export class AssessmentFormComponent implements OnInit {
	questions: any[] = [
		{
		  text: 'What is HTML?',
		  options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language']
		},
		// Add more questions here
	  ];

	  constructor() { }

	  ngOnInit(): void {
	  }
}
