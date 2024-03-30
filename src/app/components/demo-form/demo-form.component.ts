import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo-form',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './demo-form.component.html',
  styleUrl: './demo-form.component.css'
})
export class DemoFormComponent {
	selectTemplate(arg0: string) {
		throw new Error('Method not implemented.');
		}

}
