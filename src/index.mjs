import express from "express";
const PATH_PREFIX = "/api/v0.0"
const PORT = 3000;
const app = express();

import { getOneTaskController, getAllTasksController, postTasksController, putTasksController, deleteTasksController } from "./controllers/tasks.mjs";
import { validateTaskJSON } from "./middleware/jsonValidator.mjs";

try {
    app.use(express.json())  
    
    app.get(PATH_PREFIX+"/tasks/:id", getOneTaskController);

    app.get(PATH_PREFIX + "/tasks/", getAllTasksController);

    app.post(PATH_PREFIX + "/task/", validateTaskJSON, postTasksController);

    app.put(PATH_PREFIX + "/task/", validateTaskJSON, putTasksController);

    app.delete(PATH_PREFIX + "/task/", validateTaskJSON, deleteTasksController);

    app.listen(PORT,()=>{
        console.log(`Servidor Express funcionando en puerto ${PORT}`);
    });

} catch {
    console.log(`Algo ha funcionado mal...`);
    response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
}    



