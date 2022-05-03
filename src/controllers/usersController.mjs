import { db } from "../models/db.mjs";

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
