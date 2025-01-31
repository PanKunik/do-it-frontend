import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [ CommonModule, TaskItemComponent ],
  template: `
    <h2>List of tasks:</h2>
    <app-task-item *ngFor="let task of this.tasksService.getListOfTasks()"
      [task]="task"></app-task-item>
  `,
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  tasksService: TasksService = inject(TasksService);
}
