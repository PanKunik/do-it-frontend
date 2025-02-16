import { Component, Input } from '@angular/core';
import { TaskList } from '../models/taskList';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks-list',
  imports: [ MatIconModule ],
  standalone: true,
  template: `
    <section class="height-column">
      <ul class="list-of-tasks">
        @for (tasksList of this.tasksLists; track tasksList) {
          <li class="icon-with-text"><a href="#"><mat-icon [inline]="true">{{ tasksList.iconName }}</mat-icon>{{ tasksList.name }}</a></li>
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
      iconName: 'wb_sunny',
      name: 'Mój dzień'
    },
    {
      iconName: 'error',
      name: 'Ważne'
    },
    {
      iconName: 'event',
      name: 'Zaplanowane'
    },
    {
      iconName: 'add_location',
      name: 'Moja lista 1'
    }
  ];
}
