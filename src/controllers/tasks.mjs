import {tasks} from "./models/taskModels.mjs"

export function getTasksController (request, response){
    response.json(tasks);
    console.log(tasks);
}

export function postTasksController (request, response){
    console.log(request.body);
    tasks.push(request.body);
    response.sendStatus(201);
}

export function putTasksController (request, response){
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex (
      item => item.id === updatedTask.id
    );
    tasks[oldTaskIdx] = updatedTask
    response.sendStatus(200);
}

export function deleteTasksController (request, response){
    const searchedTask = request.body;
    const deleteTaskIdx = tasks.findIndex (
      item => item.id === searchedTask.id
    );
    tasks.splice(deleteTaskIdx,1)
    response.sendStatus(200);
}