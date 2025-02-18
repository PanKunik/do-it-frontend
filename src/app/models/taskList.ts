import { Task } from "./task";

export interface TaskList {
    id: string;
    name: string;
    iconName: string;
    colorClass: string;
    tasks?: Task[];
}