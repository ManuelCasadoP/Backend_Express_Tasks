import express from "express";
const PATH_PREFIX = "/api/v0.0"
const PORT = 4000;
const app = express();

import { getAllUsersController, postUserController, putUserController, deleteUserController } from "./controllers/usersController.mjs";
import { getOneTaskController, getAllTasksController, postTaskController, putTaskController, deleteTaskController } from "./controllers/tasksController.mjs";
import { validatePutUserJSON, validatePostUserJSON, validateDeleteUserJSON } from "./middleware/jsonValidator.mjs";
import { validateGetOneTaskJSON, validatePostTaskJSON, validatePutTaskJSON, validateDeleteTaskJSON } from "./middleware/jsonValidator.mjs";
import { errorsHandler } from "./middleware/errorsHandler.mjs";

try {
    app.use(express.json())  

    // EndPoints para /USERS/

    app.get(PATH_PREFIX+"/users/", getAllUsersController)

    app.post(PATH_PREFIX+"/user/", validatePostUserJSON, postUserController);

    app.put(PATH_PREFIX+"/user/", validatePutUserJSON, putUserController);
    
    app.delete(PATH_PREFIX+"/user/", validateDeleteUserJSON, deleteUserController);


    // EndPoints para /TASKS/
    
    app.get(PATH_PREFIX+"/tasks/:id", validateGetOneTaskJSON, getOneTaskController);

    app.get(PATH_PREFIX + "/tasks/", getAllTasksController);

    app.post(PATH_PREFIX + "/task/", validatePostTaskJSON, postTaskController);

    app.put(PATH_PREFIX + "/task/", validatePutTaskJSON, putTaskController);

    app.delete(PATH_PREFIX + "/task/", validateDeleteTaskJSON, deleteTaskController);

    app.use(errorsHandler);

    app.listen(PORT,()=>{
        console.log(`Servidor Express funcionando en puerto ${PORT}`);
    });

} catch (error){
    console.log(`Algo ha funcionado mal...\n ${error}`);
    response.status(500).send(`<b>Algo ha funcionado mal...<br>${error}</b>`); 
}    



