export const taskSchema = {
    
    type: "object",
    properties: {
        
        description: {
            description: "Task description",
            type: "string"
        },
        done: {
            description: "Task status",
            type: Boolean
        }
    },
    required: [ "description", "done" ],
    additionalProperties: false
}