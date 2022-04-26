import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json())

import { getTasksController, postTasksController, putTasksController, deleteTasksController } from "./controllers/tasks.mjs";

app.get("/api/v0.0/tasks/", getTasksController);

app.post("/api/v0.0/task/", postTasksController);

app.put("/api/v0.0/task/", putTasksController);

app.delete("/api/v0.0/task/", deleteTasksController);

app.listen(PORT,()=>{
    console.log(`Servidor Express funcionando en puerto ${PORT}`);
})

