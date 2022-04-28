import express from "express";
const PATH_PREFIX = "/api/v0.0"
const PORT = 3000;
const app = express();

import { getTasksController, postTasksController, putTasksController, deleteTasksController } from "./controllers/tasks.mjs";
import { validatePostTaskJSON, validatePutTaskJSON, validateDeleteTaskJSON } from "./middleware/jsonValidator.mjs";

try {
    app.use(express.json())    

    app.get(PATH_PREFIX + "/tasks/", getTasksController);

    app.post(PATH_PREFIX + "/task/", validatePostTaskJSON, postTasksController);

    app.put(PATH_PREFIX + "/task/", validatePutTaskJSON, putTasksController);

    app.delete(PATH_PREFIX + "/task/", validateDeleteTaskJSON, deleteTasksController);

    app.listen(PORT,()=>{
        console.log(`Servidor Express funcionando en puerto ${PORT}`);
    });

} catch {
    console.log(`Algo ha funcionado mal...`);
    response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
}    



