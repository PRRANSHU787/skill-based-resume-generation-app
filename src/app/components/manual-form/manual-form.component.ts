import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-manual-form',
	standalone: true,
	imports: [RouterLink,RouterOutlet],
	templateUrl: './manual-form.component.html',
	styleUrl: './manual-form.component.css'
})
export class ManualFormComponent {
	newSkill: any = {};

  addSkill() {
    // You can implement further logic here, like sending the skill data to a server
    console.log('Added Skill:', this.newSkill);
    // After adding the skill, you might want to reset the form
    this.newSkill = {};
  }
}
