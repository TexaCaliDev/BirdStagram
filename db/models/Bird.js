const {Schema} = require('mongoose')

module.exports = new Schema(
    {
        picture: {
            type: String ,

        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        rarity: {
            type: Number,
            required: true
        }
    }
)

