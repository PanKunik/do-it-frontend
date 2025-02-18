import { Injectable } from '@angular/core';
import { Module } from '../models/module';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  private modules: Module[] = [
    {
      iconName: 'check_circle',
      routeLink: 'tasks-list'
    },
    // {
    //   iconName: 'today',
    //   routeLink: 'calendar'
    // },
    // {
    //   iconName: 'schedule',
    //   routeLink: 'timers'
    // }
  ];

  public getModules(): Module[] {
    return this.modules;
  }
}
