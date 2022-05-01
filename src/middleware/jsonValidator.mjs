import { validate } from "jsonschema";

import { userSchema } from "../schemas/userSchema.mjs";

import { taskSchema } from "../schemas/taskSchema.mjs";

export function validateUserJSON ( request, response, next) {
    try {
        const validation = validate(request.body, userSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}

export function validateTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, taskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid task data provided");
            console.error("Invalid task data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}
/*
export function validatePutTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, putTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid task data provided");
            console.error("Invalid task data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}

export function validateDeleteTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, deleteTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid task data provided");
            console.error("Invalid task data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}
*/
/*
export function validatorFactory (schema) {
    return function JSONvalidator ( request, response, next) {
        try {
            const validation = validate(request.body, schema)
            if (validation.valid) {
                next();
            } else {
                response.status(400);
                response.send("Invalid task data provided");
                console.error("Invalid task data provided");
            }
        } catch (err) {
            throw "Error validating data"
        }
    }
}
const validatePostTask = validatorFactory(postTaskSchema);
const validatePutTask = validatorFactory(putTaskSchema);
const validateDeleteTask = validatorFactory(deleteTaskSchema);
*/