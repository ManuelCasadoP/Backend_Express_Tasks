export const userSchema = {
    
    type: "object",
    properties: {
        username:{
            description: "Unique username",
            type: "string"
        },
        password: {
            description: "alfanumeric password",
            type: "string"
        }
    },
    additionalProperties: false
}