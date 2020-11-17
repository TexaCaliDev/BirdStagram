const { Bird } = require('../db/schema')

const GetBird = async ( req, res) => {
    try{
        const bird = await Bird.findById(req.params.bird_id)
        res.send(bird)
    } catch(error) {
        throw new error('sorry, we dont have that bird')
    }
}


const GetBirdById = async (req, res) => {
    try {
      const bird = await Bird.findById(req.params.bird_id).populate([
        {
          model: 'birds',
          path: 'bird_id',
          select: '_id name '
        }
      
      ])
      res.send(bird)
    } catch (error) {
      throw error
    }
  }



const CreateBird = async (request, response) => {
    try {
        const bird = await new Bird(request.body)
        bird.save()
        return response.status(201).json({
            bird
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

const DeleteBird = async (req, res ) => {
    try{
        await Bird.findByIdAndDelete(req.params.bird_id)
    }catch(error){
        throw new error ('did not delete bird')
    }
}

const UpdateBird = async (req, res) => {
    try {
      await Bird.findByIdAndUpdate(
        req.params.bird_id,
        {
          ...req.body
        },
        { new: true, useFindAndModify: false }

      )
      
    } catch (error) {
      console.log(error)
    }
  }
  

  module.exports = {
      CreateBird,
      GetBird,
      DeleteBird,
      GetBirdById,
      UpdateBird
  }

