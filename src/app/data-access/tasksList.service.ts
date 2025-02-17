import { Injectable } from '@angular/core';
import { TaskList } from '../models/taskList';

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  private tasksLists: TaskList[] = [
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

  public getTasksLists(): TaskList[] {
    return this.tasksLists;
  }
}
