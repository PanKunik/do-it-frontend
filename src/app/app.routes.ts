import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimersComponent } from './timers/timers.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks-list'
    },
    {
        path: 'tasks-list',
        component: TasksListComponent,
        title: 'Tasks list',
        children: [
            {
                path: ':id',
                component: TaskComponent
            }
        ]
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        title: 'Calendar'
    },
    {
        path: 'timers',
        component: TimersComponent,
        title: 'Timers'
    }
];
