import { Injectable } from '@angular/core';
import { TaskList } from '../models/taskList';

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  private tasksLists: TaskList[] = [
    {
      id: '1',
      iconName: 'wb_sunny',
      name: 'Mój dzień',
      colorClass: 'var(--my-day-color-text)',
      tasks: [
        {
          id: '1',
          title: 'Zadanie nr 1',
          isDone: false
        },
        {
          id: '2',
          title: 'Zadanie nr 2',
          isDone: true
        }
      ]
    },
    {
      id: '2',
      iconName: 'error',
      name: 'Ważne',
      colorClass: 'var(--important-color-text)',
      tasks: [
        {
          id: '3',
          title: 'Zadanie nr 3',
          isDone: true
        }
      ]
    },
    {
      id: '3',
      iconName: 'event',
      name: 'Zaplanowane',
      colorClass: 'var(--planned-color-text)',
      tasks: [
        {
          id: '4',
          title: 'Zadanie nr 4',
          isDone: false
        },
        {
          id: '5',
          title: 'Zadanie nr 5',
          isDone: true
        },
        {
          id: '6',
          title: 'Zadanie nr 6',
          isDone: false
        }
      ]
    },
    {
      id: '4',
      iconName: 'add_location',
      name: 'Moja lista 1',
      colorClass: '#066b06'
    }
  ];

  public getTasksLists(): TaskList[] {
    return this.tasksLists;
  }

  public getTaskListById(listId: string): TaskList | undefined {
    return this.tasksLists.find(t => t.id === listId);
  }
}
