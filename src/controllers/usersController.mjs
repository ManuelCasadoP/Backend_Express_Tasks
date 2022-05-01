import { users } from "../models/usersModels.mjs";

export function getAllUsersController (request, response) {

    response.json(users);
    console.log(users);
}
    

export function postUserController (request, response) {
    users.push(request.body);
    response.sendStatus(201)
}