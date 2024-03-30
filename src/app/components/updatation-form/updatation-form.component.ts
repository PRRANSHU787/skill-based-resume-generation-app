import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileFormComponent } from "../profile-form/profile-form.component";

@Component({
    selector: 'app-updatation-form',
    standalone: true,
    templateUrl: './updatation-form.component.html',
    styleUrl: './updatation-form.component.css',
    imports: [RouterLink, RouterOutlet, ProfileFormComponent]
})
export class UpdatationFormComponent {

}
