import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <form [formGroup]="taskForm" (submit)="addTask()">
        <label for="task-title">Title:</label>
        <input type="text" id="task-title" formControlName="title"/>
        <button type="submit">Add</button>
      </form>
    </article>
  `,
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  tasksService: TasksService = inject(TasksService);

  taskForm: FormGroup = new FormGroup({
    title: new FormControl('')
  });

  addTask(): void {
    this.tasksService.addTask(this.taskForm.value.title ?? '');
  }
}
