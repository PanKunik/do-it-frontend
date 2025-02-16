import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimersComponent } from './timers/timers.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'tasks-list',
        component: TasksListComponent,
        title: 'Tasks list'
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
