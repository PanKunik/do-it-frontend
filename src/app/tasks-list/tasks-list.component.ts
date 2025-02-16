import { Component, Input } from '@angular/core';
import { TaskList } from '../models/taskList';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  imports: [ MatIconModule, RouterModule ],
  standalone: true,
  template: `
    <section class="height-column">
      <ul class="list-of-tasks">
        @for (tasksList of this.tasksLists; track tasksList) {
          <li class="icon-with-text"><a [routerLink]="['/tasks-list', tasksList.id]" routerLinkActive="router-link-active" class="main-text"><mat-icon [style.color]="tasksList.colorClass" [inline]="true">{{ tasksList.iconName }}</mat-icon>{{ tasksList.name }}</a></li>
        }
      </ul>
      <p>List of tasks on a list</p>
    </section>
  `,
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  tasksLists: TaskList[] = [
    {
      id: 1,
      iconName: 'wb_sunny',
      name: 'Mój dzień',
      colorClass: 'var(--my-day-color-text)'
    },
    {
      id: 2,
      iconName: 'error',
      name: 'Ważne',
      colorClass: 'var(--important-color-text)'
    },
    {
      id: 3,
      iconName: 'event',
      name: 'Zaplanowane',
      colorClass: 'var(--planned-color-text)'
    },
    {
      id: 4,
      iconName: 'add_location',
      name: 'Moja lista 1',
      colorClass: '#066b06'
    }
  ];
}
