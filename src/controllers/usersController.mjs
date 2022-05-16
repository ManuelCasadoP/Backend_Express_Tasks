import { db } from "../models/db.mjs";

/**
 *  Controlador para Endpoint app.get /users/
 *  ----------------------------------------
 *  Realiza consulta de todos los usuarios a la Base de datos.
 *  No realiza ninguna validación de errores. 
 *  si la base de datos está vacía devuelve un array vacío.
 */
export function getAllUsersController (request, response){

    db.all(
        `SELECT id, name FROM users`,
        (err, data)=>{
            if (err){
                console.log(`Algo ha funcionado mal...`, err);
                response.status(500).send(`<b>Algo ha funcionado mal...<br>${err}</b>`);
            } else {
                response.json(data);
                console.log(data);
            }
        });
}

/**
 *  Controlador para Endpoint app.post /user/
 *  ----------------------------------------
 *  Realiza la inserción de un nuevo usuario en la Base de datos.
 *  Realiza validación de errores:
 *   - No acepta el envío de datos en formato incorrecto mediante validación de JSON.Schema.
 *   - No acepta la inserción de un nombre de usuario repetido.
 */
export function postUserController (request, response) {
    
    const { userName, password } = request.body;

    db.get(
        `SELECT name FROM users WHERE name="${userName}"`,
        (err, data)=>{
            if (err) {
                console.log(`Algo ha funcionado mal...`, err);
                response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
            } else if (data){
                console.log("No se puede realizar la operación, el usuario ya existe.");
                response.status(401).send(`<b>Solicitud denegada. <br>
                                           <br> No se puede realizar la operación porque el usuario ya existe.<br>
                                           <br> Introduzca un nombre de usuario distinto.</b>`);
            } else {

                db.run(
                    `INSERT INTO users(name, password) VALUES ("${userName}", ${password})`,
                    (err)=>{
                        if (err) {
                            console.log(`Algo ha funcionado mal...`, err);
                            response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
                        } else {
                            console.log("Usuario añadido a BBDD");
                            response.status(201).send(`<b>Solicitud Aceptada<br>
                                                       <br>El usuario se ha añadido correctamente a la Base de Datos.</b>`);
                        }
                    }
                )
            }
        }
    )
}

/**
 *  Controlador para Endpoint app.put /user/
 *  ----------------------------------------
 *  Realiza la actualización, mediante la búsqueda por el id, de los datos de un usuario ya existente en la Base de datos.
 *  Realiza validación de errores:
 *   - No acepta el envío de datos en formato incorrecto mediante validación de JSON.Schema.
 *   - No acepta la actualización de un id no existente.
 *   - No acepta la actualización del nombre usuario con un nombre de usuario ya existente.
 */
export function putUserController (request, response) {
    
    const { id, userName, password } = request.body;

    db.get(
        `SELECT id FROM users WHERE id=${id}`,
        (err, data)=>{
            if (err) {
                console.log(`Algo ha funcionado mal...`, err);
                response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
            } else if (data){

                db.get(
                    `SELECT name FROM users WHERE name="${userName}"`,
                        (err, data)=>{
                        if (err) {
                            console.log(`Algo ha funcionado mal...`, err);
                            response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
                        } else if (data){
                             console.log("No se puede realizar la operación, el usuario ya existe.");
                             response.status(400).send(`<b>Solicitud denegada. <br>
                                                        <br> No se puede realizar la operación de actualización del usuario con un nombre de usuario ya existente.<br>
                                                        <br> Introduzca un nombre de usuario distinto.</b>`);
                        } else {
                            db.run(
                                `UPDATE users SET name="${userName}", password="${password}" WHERE id=${id}`,
                                (err)=>{
                                    if (err) {
                                        console.log(`Algo ha funcionado mal...`, err);
                                        response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
                                    } else {
                                        console.log("El usuario se ha actualizado en la BBDD");
                                        response.status(201).send(`<b>Solicitud Aceptada<br>
                                                                  <br>El usuario se ha actualizado correctamente en la Base de Datos.</b>`);
                                    }
                                }
                            )        
                        }
                    }        
                )    

            }  else {

                console.log("No se puede realizar la operación, el usuario no existe.");
                response.status(404).send(`<b>Solicitud denegada. <br>
                                        <br> No se puede realizar la operación porque el usuario no existe.<br>
                                        <br> Introduzca un nombre de id usuario válido para actualizar.</b>`);
            }
        }
    )
}

/**
 *  Controlador para Endpoint app.delete /user/
 *  ----------------------------------------
 *  Realiza la eliminación, mediante la búsqueda por el id, de los datos de un usuario existente en la Base de datos.
 *  Realiza validación de errores:
 *   - No acepta el envío de datos en formato incorrecto mediante validación de JSON.Schema.
 *   - No acepta la eliminación de un id no existente.
 */
export function deleteUserController (request,response) {

    const { id } = request.body;

    db.get(
        `SELECT * FROM users WHERE id=${id}`, 
        (err, data)=>{
            if (err) {
                console.error(err);
                response.sendStatus(500);

            } else if (data){

                db.run(
                    `DELETE FROM users WHERE id=${id}`,
                    (err)=>{
                        if (err) {
                            console.log(err, `Algo ha funcionado mal...`);
                            response.status(500).send(`<b>Algo ha funcionado mal. ${err}</b>`);
                        } else {
                            console.log("Usuario eliminado de la BBDD");
                            response.status(201).send(`<b>Solicitud Aceptada<br>
                                                       <br>El usuario se ha eliminado correctamente de la Base de Datos.</b>`);
                        }
                    }
                )
                
            } else {
                console.log(`El usuario no existe...`);
                response.status(500).send(`<b>Solicitud denegada.<br>
                                           <br> No existe el usuario que quiere eliminar...</b>`);
            }
        }
    )
}
