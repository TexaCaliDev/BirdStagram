const {Schema} = require('mongoose')

module.exports = new Schema({

    picture: {
        type: String,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
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
})