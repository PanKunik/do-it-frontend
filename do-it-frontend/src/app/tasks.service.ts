import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];
  private baseUrl: string = 'http://localhost:5000/api'

  constructor(private httpClient: HttpClient) {
    console.log('Creating new service');
    this.httpClient.get<Task[]>(`${this.baseUrl}/tasks`)
      .subscribe(tasks => this.tasks = tasks);
  }

  getListOfTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {

    this.httpClient.post(`${this.baseUrl}/tasks`, `{ "title": "${title}" }`, {
      headers: {
        'content-type': 'application/json'
      }
    }).subscribe(t => {
      this.httpClient.get<Task[]>(`${this.baseUrl}/tasks`)
        .subscribe(tasks => this.tasks = tasks);
    });    
  }
}
