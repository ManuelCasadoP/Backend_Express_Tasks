import { tasks } from "../models/taskModels.mjs";

export function getTasksController (request, response){
    response.json(tasks);
    console.log(tasks);
}

export function postTasksController (request, response){
    const postTask = (request.body);
    const listTasksIdx = tasks.findIndex(
      item => item.id === postTask.id
    );

    if (listTasksIdx >= 0){
      console.log(`La tarea con el ID:"${postTask.id}" ya existe, ...modifique el ID o intente actualizar la tarea.`);
      response.sendStatus(400);
    } else {
      tasks.push(request.body);
      console.log(`La tarea "${postTask.description}" se ha añadido correctamente con el ID:"${postTask.id}"`);
      console.log(request.body);
      response.sendStatus(201);
    }
  }

export function putTasksController (request, response){
        const updatedTask = request.body;
        const oldTaskIdx = tasks.findIndex (
        item => item.id === updatedTask.id
    );

    if (oldTaskIdx < 0){
        console.log(`La tarea con el ID:"${updatedTask.id}" no existe.`);
        response.sendStatus(400);
    } else {
        tasks[oldTaskIdx] = updatedTask
        console.log(`La Tarea con ID:"${updatedTask.id}" ha sido actualizada correctamente con la descripción "${updatedTask.description}".`);
        response.sendStatus(200);
    }
}

export function deleteTasksController (request, response){
          const updatedTask = request.body;
          const oldTaskIdx = tasks.findIndex (
          item => item.id === updatedTask.id
      );

      if (oldTaskIdx < 0){
          console.log(`La tarea con el ID:"${updatedTask.id}" no existe.`);
          response.sendStatus(400);
      } else {
          tasks.splice(oldTaskIdx,1)
          tasks[oldTaskIdx] = updatedTask;
          console.log(`La Tarea con ID:"${updatedTask.id}" con la descripción "${updatedTask.description}" ha sido eliminada correctamente`);
          response.sendStatus(200);
      }
}