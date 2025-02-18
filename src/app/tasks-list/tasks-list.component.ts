import { Component, inject } from '@angular/core';
import { TaskList } from '../models/taskList';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TasksListService } from '../data-access/tasksList.service';

@Component({
  selector: 'app-tasks-list',
  imports: [MatIconModule, RouterModule ],
  standalone: true,
  template: `
    <section>
      <div class="height-column">
        <h2 class="sub-menu-heading">List of tasks list</h2>
        <ul class="list-of-tasks">
          @for (tasksList of this.tasksLists; track tasksList) {
            <li class="icon-with-text"><a [routerLink]="['/tasks-list', tasksList.id]" routerLinkActive="router-link-active" class="main-text"><mat-icon [style.color]="tasksList.colorClass" [inline]="true">{{ tasksList.iconName }}</mat-icon>{{ tasksList.name }}</a></li>
          }
        </ul>
      </div>
      <div class="shadow"></div>
      <div>
        <router-outlet />
      </div>
    </section>
  `,
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  private tasksListsService: TasksListService = inject(TasksListService);
  public tasksLists!: TaskList[];

  constructor() {
    this.tasksLists = this.tasksListsService.getTasksLists();
  }
}
