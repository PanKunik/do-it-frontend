import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  template: `
    <section class="task-item">
      <p>ID: {{ task.Id }} </p>
      <p>Title: {{ task.Title }}</p>
      <p>Created at: {{ task.CreatedAt }}</p>
      <p>Done: {{ task.IsDone }}</p>
      <p>Important: {{ task.IsImportant }}</p>
    </section>
  `,
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Task;
}
