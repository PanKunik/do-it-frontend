import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

export const routes: Routes = [
    {
        path: 'tasks',
        component: TasksListComponent,
        title: 'Tasks List Page'
    },
    {
        path: 'add-task',
        component: AddTaskComponent,
        title: 'Add new task Page'
    }
];
