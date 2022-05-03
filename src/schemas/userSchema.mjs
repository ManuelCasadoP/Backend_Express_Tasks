export const userSchema = {
    
    type: "object",
    properties: {
        
        userName:{
            description: "Unique username",
            type: String
        },
        password: {
            description: "alfanumeric password",
            type: String
        }
    },
    additionalProperties: false
}