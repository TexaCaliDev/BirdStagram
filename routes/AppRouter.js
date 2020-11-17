const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const BirdsRouter = require('./BirdsRouter')


Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/birds', BirdsRouter)

module.exports = Router
