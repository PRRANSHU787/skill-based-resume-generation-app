import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-logo-form',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './logo-form.component.html',
  styleUrl: './logo-form.component.css'
})
export class LogoFormComponent {

}
