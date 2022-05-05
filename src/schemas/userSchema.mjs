/*
export const userSchema = {
    $id: "/user",
    type: "object",
    properties: {
        userName: {
            description: "Unique userName",
            type: "string"
        },
        password: {
            description: "User secret",
            type: "string"
        },
    },
    required: [ "userName", "password" ],
    additionalProperties: false
}
*/

export const userPostSchema = {
    $id: "/user",
    type: "object",
    properties: {
        userName: {
            description: "Unique userName",
            type: "string",
            minLength: 1
        },
        password: {
            description: "User secret",
            type: "string",
            minLength: 1
        },
    },
    required: [ "userName", "password" ],
    additionalProperties: false
}

export const userDeleteSchema = {
    $id: "/user",
    type: "object",
    properties: {
        id: {
            description: "id userName number",
            type: "number",
            minimun: 0
        }
    },
    required: [ "id" ],
    additionalProperties: false
}
