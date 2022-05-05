import { validate } from "jsonschema";

import { userPostSchema, userDeleteSchema } from "../schemas/userSchema.mjs";

import { taskSchema } from "../schemas/taskSchema.mjs";

export function validatePostUserJSON ( request, response, next) {
    try {
        const validation = validate(request.body, userPostSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON POST schema error:<br><br> Invalid User data provided</b>");
            console.error("JSON POST schema error: \n Invalid User data provided");
        }
    } catch (err) {
        throw "user POST Schema: Error validating data"
    }
}

export function validateDeleteUserJSON ( request, response, next) {
    try {
        const validation = validate(request.body, userDeleteSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON DELETE schema error:<br><br> Invalid User data provided</b>");
            console.error("JSON DELETE schema error: \n Invalid User data provided");
        }
    } catch (err) {
        throw "user DELETE schema: Error validating data"
    }
}

export function validateTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, taskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON schema error:<br><br> Invalid Task data provided</b>");
            console.error("JSON schema error: \n Invalid Task data provided");
        }
    } catch (err) {
        throw "task schema: Error validating data"
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