const {Schema} = require('mongoose')

module.exports = new Schema(
    {
        picture: {
            type: String,
        },
    
        bird_name: {
            type: String
        },
        description: {
            type: String
        },
        range: {
            type: String,
        },
        prey: {
            type: String
        },
        nesting: {
            type: String
        }
    }
)

