import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
    {
      Id: '5dc47f02-1593-4915-b013-22b99a6b38fc',
      Title: 'Do homework',
      CreatedAt: new Date(2025, 1, 27, 16, 0, 1),
      IsDone: false,
      IsImportant: false
    },
    {
      Id: '46837bfa-bb49-47e3-bfeb-d5b40c4f162f',
      Title: 'Do the dishes',
      CreatedAt: new Date(2025, 1, 28, 9, 27, 31),
      IsDone: true,
      IsImportant: false
    },
    {
      Id: 'daa1cc19-e555-4e9e-951a-8ede03c68a8d',
      Title: 'Clean the cat litter',
      CreatedAt: new Date(2025, 1, 28, 10, 11, 17),
      IsDone: true,
      IsImportant: true
    },
    {
      Id: '63dbdf96-97fb-47ca-8ac0-9fa6d6464ca2',
      Title: 'Cook the dinner',
      CreatedAt: new Date(2025, 1, 30, 18, 31, 54),
      IsDone: false,
      IsImportant: true
    }
  ];

  constructor() { }

  getListOfTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    this.tasks.push({
      Id: crypto.randomUUID(),
      Title: title,
      CreatedAt: new Date(Date.now()),
      IsDone: false,
      IsImportant: false
    });
  }
}
