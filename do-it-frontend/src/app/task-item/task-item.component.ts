import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  template: `
    <section class="task-item">
      <p>ID: {{ task.id }} </p>
      <p>Title: {{ task.title }}</p>
      <p>Created at: {{ task.createdAt }}</p>
      <p>Done: {{ task.isDone }}</p>
      <p>Important: {{ task.isImportant }}</p>
    </section>
  `,
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Task;
}
