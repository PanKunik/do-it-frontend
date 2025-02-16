import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { Module } from './models/module';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NavigationComponent ],
  template: `
    <header class="height-column">
      <p class="logo">DoIt</p>
      <app-navigation [modules]="this.modules"></app-navigation>
    </header>
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  modules: Module[] = [
    {
      iconName: 'check_circle',
      routeLink: 'tasks-list'
    },
    {
      iconName: 'today',
      routeLink: 'calendar'
    },
    {
      iconName: 'schedule',
      routeLink: 'timers'
    }
  ];
}
