import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ MatSlideToggleModule, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'do-it-frontend';
}
