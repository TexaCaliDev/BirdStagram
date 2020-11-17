const Router = require('express').Router()
const UserController = require('../backend/controllers/UserController')
const {
  getToken,
  createToken,
  verifyToken
} = require('../backend/middleware/JwtHandler')

Router.get('/:user_id', UserController.GetProfile)
Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInUser, createToken)
Router.get(
  '/refresh/session',
  getToken,
  verifyToken,
  UserController.RefreshSession
)

module.exports = Router
