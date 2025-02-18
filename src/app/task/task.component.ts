import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TasksListService } from '../data-access/tasksList.service';
import { TaskList } from '../models/taskList';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task',
  imports: [ MatIconModule ],
  template: `
    <div class="task-list-top">
      <mat-icon [style.color]="taskList?.colorClass" [inline]="true">{{taskList?.iconName}}</mat-icon><h3 class="task-list-heading">{{taskList?.name}}</h3>
    </div>
    <ul class="task-list">
      @for (task of taskList?.tasks; track task) {
        <li class="task-item" [class]="{ isDone: task.isDone }"><div class="task-item-check" (click)="onDoTask(task.id)"><mat-icon style="font-weight: bold; position: relative; top: -19px; color: var(--accent-color)">{{ task?.isDone == true ? 'check' : '' }}</mat-icon></div><span>{{task.title}}</span></li>
      }
    </ul>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnChanges {
  @Input() public id!: string;
  public taskList?: TaskList;

  constructor(readonly tasksService: TasksListService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.taskList = this.tasksService.getTaskListById(this.id);
  }

  onDoTask(id: string): void {
    var task = this.taskList?.tasks?.find(t => t.id === id);
    if (task !== undefined)
      task.isDone = !task.isDone;
  }
}