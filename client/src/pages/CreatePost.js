import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UploadPost, } from '../services/PostServices'
import Nav from '../components/Nav'
// import "../styles/createPost.css"

export default class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      bird_name: '',
      description: '',
      range: '',
      picture: '',
      prey: '',
      nesting: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
        
      await __UploadPost(this.state, this.props.currentUser._id)
      
      console.log(this.state,"log 1")
      this.props.history.push('/users/posts/')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { bird_name, range,picture,prey,nesting, description } = this.state
    return (
      <div className="upload content">
        <Nav />
        <form className="flex-col" onSubmit={this.handleSubmit}>
            <TextInput
              placeholder="Picture URL"
              name="picture"
              value={picture}
              onChange={this.handleChange}
            />
          <TextInput
            placeholder="bird_name"
            name="bird_name"
            value={bird_name}
            onChange={this.handleChange}
          />
            <TextInput
              name="description"
              placeholder="description"
              value={description}
              onChange={this.handleChange}
            />
          <TextInput
            placeholder="range"
            name="range"
            value={range}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="nesting"
            name="nesting"
            value={nesting}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="prey"
            name="prey"
            value={prey}
            onChange={this.handleChange}
          />
          <button>Upload</button>
        </form>
      </div>
    )
  }
}
