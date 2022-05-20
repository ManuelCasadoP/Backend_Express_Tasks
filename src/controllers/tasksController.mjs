import { db } from "../models/db.mjs"

export function getOneTaskController (request, response){

    const { id } = request.body;

    db.get(
        `SELECT id, description, done FROM tasks WHERE id=${id}`,
        (err, data)=>{
            if (err){
                console.log(`Algo ha funcionado mal...\n ${err}`);
                response.status(500).send(`<b>Algo ha funcionado mal...</b><br>${err}`);
            } else if (!data){
                console.log("No se puede realizar la operación, no existe la tarea.");
                response.status(404).send(`<b>Solicitud denegada. <br>
                                           <br> No se puede realizar la operación porque la tarea ${id} que quiere eliminar no existe.<br>
                                           <br> Introduzca otro id de tarea.</b>`);
                
            } else {
                response.json(data);
                console.log(data);
            }
        });
}

export function getAllTasksController (request, response){

    db.all(
        `SELECT id, description, done FROM  tasks`,
        (err, data)=>{
            if (err){
                console.log(`Algo ha funcionado mal...\n ${err}`);
                response.status(500).send(`<b>Algo ha funcionado mal...</b><br>${err}`);
            } else {
                response.json(data);
                console.log(data);
            }
        });
}

export function postTaskController (request, response) {
    const { description, done } = request.body;
    db.run(
        `INSERT INTO tasks(description, done) VALUES ("${description}", ${done})`,
        (err)=>{
            if (err) {
                console.log(`Algo ha funcionado mal...\n ${err}`);
                response.status(500).send(`<b>Algo ha funcionado mal...</b><br>${err}`);
            } else {
                response.status(201).send(`<b>Solicitud Aceptada</b><br><br><b>La tarea "${description}" se ha añadido correctamente.</b>`);
            }
        }
    )
}

export function putTaskController (request, response) {
    const { id, description, done } = request.body;

    db.get(
        `SELECT id FROM tasks WHERE id=${id}`,
        (err, data)=>{

            if (err) {
                console.log(`Algo ha funcionado mal...`, err);
                response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);

            } else if (data){

                    db.run(
                        `UPDATE tasks SET description="${description}", done="${done}" WHERE id=${id}`,
                        (err)=>{
                            if (err) {
                                console.log(`Algo ha funcionado mal...`, err);
                                response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);

                            } else {
                                console.log("La tarea se ha actualizado en la BBDD");
                                response.status(201).send(`<b>Solicitud Aceptada<br>
                                                           <br>La tarea se ha actualizado correctamente en la Base de Datos.</b>`);
                            }
                        }
                    )        
           
            }  else {

                console.log("No se puede realizar la operación, la tarea no existe.");
                response.status(404).send(`<b>Solicitud denegada. <br>
                                        <br> No se puede realizar la operación porque la tarea id: ${id} no existe.<br>
                                        <br> Introduzca un id de tarea válido para actualizar.</b>`);
            }
        }
    )
}

export function deleteTaskController (request,response) {

    const { id } = request.body;

    db.get(
        `SELECT * FROM tasks WHERE id=${id}`, 
        (err, data)=>{
            if (err) {
                console.log(`Algo ha funcionado mal...\n ${err}`);
                response.status(500).send(`<b>Algo ha funcionado mal...</b><br>${err}`);

            } else if (data){

                db.run(
                    `DELETE FROM tasks WHERE id=${id}`,
                    (err)=>{
                        if (err) {
                            console.log(`Algo ha funcionado mal...\n ${err}`);
                            response.status(500).send(`<b>Algo ha funcionado mal...</b><br>${err}`);
                        } else {
                            console.log(`Tarea id: ${id} eliminada`);
                            response.status(201).send(`<b>Solicitud Aceptada<br>
                                                       <br>La tarea id: ${id} se ha eliminado correctamente.</b>`);
                        }
                    }
                )
                
            } else {
                console.log(`No se puede realizar la operación, \n la tarea id: ${id} que quiere eliminar no existe.`);
                response.status(404).send(`<b>Solicitud denegada. <br>
                                           <br> No se puede realizar la operación.<br>
                                           <br> La tarea con id: ${id} que quiere eliminar no existe.<br>
                                           <br> Introduzca otro id de tarea.</b>`);
            }
        }
    )
}

/*
export function postTasksController (request, response){
        try {    
                class POST {
                        constructor ({id=shortid(), description="Tarea enviada sin descripción", done=false}){
                        this.id = id;
                        this.description = description;
                        this.done = done;
                    }
               }
               
                const postTask = new POST(request.body);

                const listTasksIdx = tasks.findIndex(
                item => item.id === postTask.id
                );

            if (listTasksIdx >= 0){
                console.log(`La tarea con el ID: ${postTask.id} ya existe, ...modifique el ID o intente actualizar la tarea.`);
                response.status(400).send(`<b>Solicitud Incorrecta</b><br><br><b>La tarea con el ID: ${postTask.id} ya existe, ...modifique el ID o intente actualizar la tarea.</b>`);
            } else {
                tasks.push(postTask);
                console.log(`La tarea "${postTask.description}" se ha añadido correctamente con el ID: ${postTask.id}`);
                console.log(postTask);
                response.status(201).send(`<b>Solicitud Aceptada</b><br><br><b>La tarea "${postTask.description}" se ha añadido correctamente con el ID: ${postTask.id}</b>`);
            }
        } catch {
                console.log(`Algo ha funcionado mal...`);
                response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
        }    
  }
*/
/*
export function putTasksController (request, response){
        try {   class PUT {
                    constructor ({id, description="Tarea enviada sin descripción", done=false}){
                        this.id = id;
                        this.description = description;
                        this.done = done;
                    }
                }
            
                const updatedTask = new PUT(request.body);
            
                const oldTaskIdx = tasks.findIndex (
                item => item.id === updatedTask.id
            );

            if(isNaN(oldTaskIdx) || oldTaskIdx===""){
                console.log(`No ha introducido el ID de tarea a modificar.`);
                response.status(404).send(`<b>Solicitud Incorrecta</b><br><br><b>No ha introducido el ID de tarea a modificar.</b>`);
            }

            else if (oldTaskIdx < 0){
                console.log(`La tarea con el ID: ${updatedTask.id} no existe.`);
                response.status(404).send(`<b>Solicitud Incorrecta</b><br><br><b>La tarea con el ID: ${updatedTask.id} no existe.</b>`);
            } 
            
            else {
                tasks[oldTaskIdx] = updatedTask
                console.log(`La Tarea con ID: ${updatedTask.id} ha sido actualizada correctamente con la descripción "${updatedTask.description}".`);
                response.status(200).send(`<b>Solicitud Aceptada</b><br><br><b>La tarea con ID: ${updatedTask.id} ha sido actualizada correctamente con la descripción "${updatedTask.description}".</p>`);
            }
        } catch {
                console.log(`Algo ha funcionado mal...`);
                response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
        }    
}

export function deleteTasksController (request, response){
        try {   class DELETE {
                    constructor ({id, description="Tarea enviada sin descripción", done=false}){
                        this.id = id;
                        this.description = description;
                        this.done = done;
                    }
                }

                const searchedTask = new DELETE(request.body);
               
                const deleteTaskIdx = tasks.findIndex (
                item => item.id === searchedTask.id
                );

            if (isNaN(deleteTaskIdx) || deleteTaskIdx==="" || deleteTaskIdx < 0){
                console.log(`Esa tarea no existe. Introduzca un ID correcto...`);
                response.status(404).send(`<b>Solicitud Incorrecta</b><br><br><b>Esa tarea no existe.<br> Introduzca un ID correcto...</b>`);
            } else {
                tasks.splice(deleteTaskIdx,1);
                console.log(`La tarea con el ID: ${searchedTask.id} y la descripción "${searchedTask.description}" ha sido eliminada correctamente`);
                response.status(200).send(`<b>Solicitud Aceptada</b><br><br><b>La tarea con el ID: ${searchedTask.id} y la descripción "${searchedTask.description}" ha sido eliminada correctamente</p>`);
            }
        } catch {
                console.log(`Algo ha funcionado mal...`);
                response.status(500).send(`<b>Algo ha funcionado mal...</b>`); 
        }   
}
*/