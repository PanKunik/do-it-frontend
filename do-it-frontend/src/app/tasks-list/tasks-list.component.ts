import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../task'

@Component({
  selector: 'app-tasks-list',
  imports: [ CommonModule, TaskItemComponent ],
  template: `
    <h2>List of tasks:</h2>
    <app-task-item *ngFor="let task of tasksList"
      [task]="task"></app-task-item>
  `,
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  tasksList: Task[] = [
    {
      Title: 'Task title 1',
      CreatedAt: new Date(2024, 12, 12, 15, 36, 33),
      IsDone: false,
      IsImportant: false
    },
    {
      Title: 'Task title 2',
      CreatedAt: new Date(2024, 12, 1, 7, 23, 55),
      IsDone: false,
      IsImportant: true
    },
    {
      Title: 'Task title 3',
      CreatedAt: new Date(2024, 11, 30, 12, 0, 56),
      IsDone: true,
      IsImportant: false
    },
    {
      Title: 'Task title 4',
      CreatedAt: new Date(2024, 10, 31, 22, 10, 1),
      IsDone: true,
      IsImportant: true
    }
  ];
}
