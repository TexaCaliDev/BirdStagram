const {
    Post,
    User,
    Bird
  } = require('../../db/schema')
  
  const GetPosts = async (req, res) => {
    try {
      const { page, limit } = req.query
      const offset =
        page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
      const posts = await Post.find()
        .limit(parseInt(limit))
        .skip(offset)
        .sort({ bird_name: 'desc' })
      res.send(posts)
    } catch (error) {
      throw error
    }
  }
  
  const GetPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.post_id).populate([{
          model: 'users',
          path: 'user_id',
          select: '_id name email'
        }
  
      ])
      res.send(post)
    } catch (error) {
      throw error
    }
  }
  
  
  const CreatePost = async (req, res) => {
    console.log(req.body)
    try {
  
      const post = new Post({
        picture: req.body.picture,
        user_id: req.params.user_id,
        bird_name: req.body.bird_name,
        description: req.body.description,
        range: req.body.region,
        rarity: req.body.rarity
      })
      await post.save()
      await User.findByIdAndUpdate(req.params.user_id, {
        $push: {
          posts: post._id
        }
      }, {
        upsert: true,
        new: true
      })
      res.send(post)
    } catch (error) {
      throw error
    }
  }
  
  const DeletePost = async (req, res) => {
    console.log(req.params.user_id)
    try {
      await Post.deleteOne({
        _id: req.params.post_id
      })
      await User.findByIdAndUpdate(
        req.params.user_id, {
          $pull: {
            posts: req.params.post_id
          }
        }, {
          new: true,
          upsert: true
        },
        (error, updatedPost) => {
          if (error) {
            console.log(error)
          }
          res.send(updatedPost)
        }
      )
    } catch (error) {
      throw error
    }
  }
  
  const UpdatePost = async (req, res) => {
    try {
      await Post.findByIdAndUpdate(
        req.params.post_id, {
          ...req.body
        }, {
          new: true,
          useFindAndModify: false
        },
  
      )
    } catch (error) {
      throw error
    }
  }
  
  module.exports = {
    GetPosts,
    CreatePost,
    DeletePost,
    UpdatePost,
    GetPostById
  }