
// El mock es una especie de emulador de base de datos

import { Task } from "./Task";

export const TASKS: Task[] = [

    {
        id : 1,
        text: "Tomar agua",
        day: "Marzo 24 a las 15 hs",
        reminder: true
    },

    {
        id : 2,
        text: "ir a la dietética",
        day: "algún día",
        reminder: true
    },

    {
        id : 3,
        text: "Hacer portafolio",
        day: "primera semana de abril",
        reminder: false
    },

    {
        id : 4,
        text: "ver serial experiment lain",
        day: "Abril 02 a las 22 hs",
        reminder: false
    }


];