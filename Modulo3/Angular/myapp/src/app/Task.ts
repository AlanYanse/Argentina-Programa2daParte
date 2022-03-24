// Basicamente esta interface es para manejar la "base de datos" en mock-task

export interface Task {
    id : number,
    text : string,
    day: string,
    reminder : boolean
}
