import { db } from "../models/db.mjs";

export function getAllUsersController (request, response){

    db.all(
        `SELECT id, name FROM users`,
        (err, data)=>{
            if (err){
                console.log(err, `Algo ha funcionado mal...`);
                response.status(500).send(err, `<b>Algo ha funcionado mal...</b>`);
            } else {
                response.json(data);
                console.log(data);
            }
        });
}
    

export function postUserController (request, response) {
    
    const { userName, password } = request.body;

    db.run(
        `INSERT INTO users(name, password) VALUES ("${userName}", ${password})`,
        (err)=>{
            if (err) {
                console.log(err, `Algo ha funcionado mal...`);
                response.status(500).send(err, `<b>Algo ha funcionado mal...</b>`);
            } else {
                response.status(201).send(`<b>Solicitud Aceptada</b><br><br><b>El usuario se ha añadido correctamente a la Base de Datos.</b>`);
            }
        }
    )
}

export function deleteUserController (request,response) {

    const { id } = request.body;

    db.get(
        `SELECT * FROM users WHERE id=${id} `, 
        (err, data)=>{
            if (data){

                db.run(
                    `DELETE FROM users WHERE id=${id}`,
                    (err)=>{
                        if (err) {
                            console.log(err, `Algo ha funcionado mal...`);
                            response.status(500).send(err, `<b>Algo ha funcionado mal...</b>`);
                        } else {
                            response.status(201).send(`<b>Solicitud Aceptada</b><br><br><b>El usuario se ha eliminado correctamente de la Base de Datos.</b>`);
                        }
                    }
                )
                
            } else {
                console.log(`No existe el usuario que quiere eliminar...`);
                response.status(500).send(`<b>No existe el usuario que quiere eliminar...</b>`);
            }
        }
    )
}
