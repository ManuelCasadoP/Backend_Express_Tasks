export const taskSchema = {
    
    type: "object",
    properties: {
        
        description: {
            description: "Task description",
            type: String
        },
        done: {
            description: "Task status",
            type: Boolean
        }
    },
    additionalProperties: false
}