import express from "express";
const PATH_PREFIX = "/api/v0.0"
const PORT = 3000;
const app = express();

import { getAllUsersController, postUserController, deleteUserController } from "./controllers/usersController.mjs";
import { getAllTasksController, postTasksController } from "./controllers/tasksController.mjs";
import { validatePostUserJSON, validateDeleteUserJSON, validateTaskJSON } from "./middleware/jsonValidator.mjs";

try {
    app.use(express.json())  

    // EndPoints para /USERS/

    app.get(PATH_PREFIX+"/users/", getAllUsersController)

    app.post(PATH_PREFIX+"/user/", validatePostUserJSON, postUserController);
    
    app.delete(PATH_PREFIX+"/user/", validateDeleteUserJSON, deleteUserController);


    // EndPoints para /TASKS/
    
    //app.get(PATH_PREFIX+"/tasks/:id", getOneTaskController);

    app.get(PATH_PREFIX + "/tasks/", getAllTasksController);

    app.post(PATH_PREFIX + "/task/", validateTaskJSON, postTasksController);

    //app.put(PATH_PREFIX + "/task/", validateTaskJSON, putTasksController);

    //app.delete(PATH_PREFIX + "/task/", validateTaskJSON, deleteTasksController);

    app.listen(PORT,()=>{
        console.log(`Servidor Express funcionando en puerto ${PORT}`);
    });

} catch {
    console.log(`Algo ha funcionado mal...`);
    response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
}    



