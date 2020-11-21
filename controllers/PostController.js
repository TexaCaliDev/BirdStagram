const {Post} = require('../db/schema')
  
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
        ...req.body, user_id: req.params.user_id
       
      })
       post.save()

      console.log(post)
      res.send(post)
    } catch (error) {
      throw error
    }
  }
  
  const DeletePost = async (req, res) => {
    
    try {
     const postDelete =  await Post.findByIdAndDelete(req.params.post_id)
    console.log(postDelete)
    res.send({msg: 'deleted'})
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
      console.log(res.data)
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