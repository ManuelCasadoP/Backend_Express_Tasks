export const postUserSchema = {
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

export const putUserSchema = {
    $id: "/user",
    type: "object",
    properties: {
        id: {
            description: "id userName number",
            type: "number",
            minimun: 0
        },
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
    required: [ "id", "userName", "password" ],
    additionalProperties: false
}

export const deleteUserSchema = {
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
