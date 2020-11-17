const Router = require('express').Router()
const BirdsController = require('../controllers/BirdsController')

Router.get('/:bird_id',  BirdsController.GetBirdById)
Router.post('/create', BirdsController.CreateBird)
Router.delete('/:bird_id', BirdsController.DeleteBird)
Router.put('/:bird_id', BirdsController.UpdateBird)

module.exports = Router
