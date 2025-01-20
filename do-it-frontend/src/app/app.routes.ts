import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

export const routes: Routes = [
    {
        path: 'tasks',
        component: TasksListComponent,
        title: 'Tasks List Page'
    }
];
