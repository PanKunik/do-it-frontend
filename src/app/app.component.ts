import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { Module } from './models/module';
import { ModulesService } from './data-access/modules.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NavigationComponent ],
  template: `
    <header class="height-column accent-bg">
      <p class="logo accent-text">DoIt</p>
      <app-navigation [modules]="this.modules"></app-navigation>
    </header>
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public modules!: Module[];
  private modulesService: ModulesService = inject(ModulesService);

  constructor() {
    this.modules = this.modulesService.getModules();
  }
}
