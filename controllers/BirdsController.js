const { Bird } = require('../db/schema')

const GetAllBirds = async (request, response) => {
  try{
      const birds = await Bird.find()
      return response.status(200).json({birds})
  } catch (error) {
      return response.status(500).send(error.message)
  }
}



const GetBirdById = async (req, res) => {
    try {
      const bird = await Bird.findById(req.params.bird_id).populate([
        {
          model: 'bird',
          path: 'bird_id',
          select: '_id name '
        }
      
      ])
      res.send(bird)
    } catch (error) {
      return res.status(500).send(error.message)
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
        return res.status(500).json({ error: error.message })
    }
}

const DeleteBird = async (req, res ) => {
    try{
        await Bird.findByIdAndDelete(req.params.bird_id)
    }catch(error){
      return res.status(500).send(error.message)
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
      GetAllBirds,
      DeleteBird,
      GetBirdById,
      UpdateBird
  }

