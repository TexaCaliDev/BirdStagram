const {
    model
} = require('mongoose')

const UserSchema = require('./models/User')
const PostSchema = require('./models/Post')
const BirdSchema = require('./models/Bird')

const User = model('users', UserSchema)
const Post = model('posts', PostSchema)
const Bird = model('birds', BirdSchema)

module.exports = {
    User,
    Post,
    Bird
}