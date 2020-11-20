import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetPosts } from '../services/PostServices'
// import '../styles/PostView.css'
export default class ViewPost extends Component {
  constructor() {
    super()
    this.state = {
      post: null
    }
  }

  componentDidMount() {
    this.getPost()
  }

  getPost = async () => {
    try {
      const post = await __GetPosts(this.props.match.params.post_id)
      this.setState({ post })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { post } = this.state
    if (this.state.post) {
      return (
        <div className="posts detail">
          <div className="content-wrapper flex-row">
            <div className="left-content col-1">
              <div className="image-wrapper">
                <img src={post.picture} alt="post" />
              </div>
            </div>
            <div className="right-content col-2 flex-col">
              <div className="content-top">
                <h2>{post.bird_name}</h2>
                <p>{post.description}</p>
                <p>{post.range}</p>
                <p>{post.prey}</p>
                <p>{post.nesting}</p>
              
              </div>
      
            </div>
          </div>
        </div>
      )
    }
    return <h3>Loading...</h3>
  }
}
