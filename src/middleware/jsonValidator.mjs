import { validate } from "jsonschema";

import { postUserSchema, putUserSchema, deleteUserSchema } from "../schemas/userSchema.mjs";

import { getOneTaskSchema, postTaskSchema, putTaskSchema, deleteTaskSchema } from "../schemas/taskSchema.mjs";

export function validatePostUserJSON ( request, response, next) {
    try {
        const validation = validate(request.body, postUserSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON POST USER schema error:<br><br> Invalid User data provided</b>");
            console.error("JSON POST USER schema error: \n Invalid User data provided");
        }
    } catch (err) {
        throw "POST User Schema: Error validating data"
    }
}

export function validatePutUserJSON ( request, response, next) {
    try {
        const validation = validate(request.body, putUserSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON PUT USER schema error:<br><br> Invalid User data provided</b>");
            console.error("JSON PUT USER schema error: \n Invalid User data provided");
        }
    } catch (err) {
        throw "PUT User Schema: Error validating data"
    }
}

export function validateDeleteUserJSON ( request, response, next) {
    try {
        const validation = validate(request.body, deleteUserSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON DELETE USER schema error:<br><br> Invalid User data provided</b>");
            console.error("JSON DELETE USER schema error: \n Invalid User data provided");
        }
    } catch (err) {
        throw "DELETE User schema: Error validating data"
    }
}

export function validateGetOneTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, getOneTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON GET One TASK schema error:<br><br> Invalid Task data provided</b>");
            console.error("JSON GET One TASK schema error: \n Invalid Task data provided");
        }
    } catch (err) {
        throw "POST Task schema: Error validating data"
    }
}

export function validatePostTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, postTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON POST TASK schema error:<br><br> Invalid Task data provided</b>");
            console.error("JSON POST TASK schema error: \n Invalid Task data provided");
        }
    } catch (err) {
        throw "POST Task schema: Error validating data"
    }
}

export function validatePutTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, putTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON PUT TASK schema error:<br><br> Invalid Task data provided</b>");
            console.error("JSON PUT TASK schema error: \n Invalid Task data provided");
        }
    } catch (err) {
        throw "PUT Task schema: Error validating data"
    }
}

export function validateDeleteTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, deleteTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("<b>JSON DELETE USER schema error:<br><br> Invalid User data provided</b>");
            console.error("JSON DELETE USER schema error: \n Invalid User data provided");
        }
    } catch (err) {
        throw "DELETE User schema: Error validating data"
    }
}

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