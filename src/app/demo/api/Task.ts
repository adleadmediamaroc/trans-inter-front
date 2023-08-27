import {TaskPriority} from "./enums/TaskPriority";

export interface Task {

    taskId?: bigint;
    name ?: string;
    taskDetails?: string;
    status?: string;
    dueDate?: string;
    planNextAction?: string;
    priority?: TaskPriority;
    repeatEvery?: string;

    module?:string;
    agentId?: bigint;
    clientId?: bigint;




}
