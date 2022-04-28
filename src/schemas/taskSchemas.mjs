export const taskSchema = {
    
    type: "object",
    properties: {
        id:{
            description: "Unique ID",
            type: "integer"
        },
        description: {
            description: "Task description",
            type: "string"
        },
        done: {
            description: "Task status",
            type: "boolean"
        }
    },
    additionalProperties: false
}