import { users } from "../models/usersModels.mjs";
import { db } from "../models/db.mjs";

export function getAllUsersController (request, response){

    db.all(
        `SELECT id, name FROM  users`,
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
                console.error(err);
                response.sendStatus(500)
            } else {
                response.status(201).send(`<b>Solicitud Aceptada</b><br><br><b>El usuario se ha añadido correctamente a la Base de Datos.</b>`);
            }
        }
    )
}