import { Component, Input } from '@angular/core';
import { Module } from '../models/module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [ MatIconModule, RouterModule ],
  standalone: true,
  template: `
    <nav class="main-nav">
      <ul>
        @for (module of modules; track module) {
          <li><a class="accent-text" [routerLink]="module.routeLink" [routerLinkActive]="'active'"><mat-icon>{{ module.iconName }}</mat-icon></a></li>
        }
      </ul>
    </nav>
  `,
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() modules!: Module[];
}
