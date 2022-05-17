export const getOneTaskSchema = {
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

export const postTaskSchema = {
    
    type: "object",
    properties: {
        
        description: {
            description: "Task description",
            type: "string"
        },
        done: {
            description: "Task status",
            type: "Boolean"
        }
    },
    required: [ "description", "done" ],
    additionalProperties: false
}