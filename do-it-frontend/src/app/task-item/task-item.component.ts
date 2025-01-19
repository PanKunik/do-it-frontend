import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  template: `
    <section class="task-item">
      <p>{{ task.Title }}</p>
      <p>{{ task.CreatedAt }}</p>
      <p>{{ task.IsDone }}</p>
      <p>{{ task.IsImportant }}</p>
    </section>
  `,
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Task;
}
