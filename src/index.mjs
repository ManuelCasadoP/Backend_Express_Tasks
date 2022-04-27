import express from "express";
const PATH_PREFIX = "/api/v0.0"
const app = express();
const PORT = 3000;

app.use(express.json())

import { getTasksController, postTasksController, putTasksController, deleteTasksController } from "./controllers/tasks.mjs";

app.get(PATH_PREFIX + "/tasks/", getTasksController);

app.post(PATH_PREFIX + "/task/", postTasksController);

app.put(PATH_PREFIX + "/task/", putTasksController);

app.delete(PATH_PREFIX + "/task/", deleteTasksController);

app.listen(PORT,()=>{
    console.log(`Servidor Express funcionando en puerto ${PORT}`);
})

